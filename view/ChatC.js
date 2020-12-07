import React, {Component} from 'react';
import {Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'

import FireService from '../services/fire/Fire'
import {ChatStyle, ChatAndroidStyle} from '../assets/style/chat.style';

export default class ChatC extends Component {

    state = {message: []}

    get user() {
        return {
            _id: FireService.uid,
            name: this.props.navigation.state.params.name,
        }
    }

    componentDidMount() {
        FireService.get(message => {
            this.setState(prev => ({
                messages: GiftedChat.append(prev.message, message)
            }))
        })
    }

    componentWillMount() {
        FireService.off()
    }


    render(){
        const chat = <GiftedChat message={this.state.message} onSend={FireService.send} user={this.user}/> 
        
        if(Platform.OS === 'android') {
            return (
                <KeyboardAvoidingView style={ChatAndroidStyle} behavior='paddind' keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            )
        }

        return <SafeAreaView style={ChatAndroidStyle}>{chat}</SafeAreaView>
    }
}