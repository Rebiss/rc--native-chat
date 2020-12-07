import firebase from 'firebase'
import {firebaseConfig} from '../config/firebase.cfg'

class FireService {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init(){
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }

    checkAuth(){
        firebase.auth().onAuthStateChanged(user => {
            if(!user) firebase.auth().signInAnonymously()
        })
    }

    send = messages => {
        messages.forEach(msg => {
            const data = {
                text: msg.text,
                time: firebase.database.ServerValue.TIMESTAMP,
                user: msg.user
            }

            this.db.push(data)
        })
    }

    parse = messages => {
        const {text, time, user} = messages.val(),
            {key: _id} = messages,
            createdAt = new Date(time);

        return {_id, createdAt, user, text, time}
    }

    get = callBack => this.db.on("child_added", snapshot => callBack(this.parse(snapshot)))
    
    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref('messages')
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new FireService()