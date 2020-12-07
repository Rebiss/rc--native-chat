import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {RoomStyle,RoomCircleStyle,RoomViewStyel, RoomHeaderStyel, RoomInputStyel, RoomTouchesStyle, RoomTouchOpacityStyle} from '../assets/style/room.style'

export default class RoomC extends Component {
        state = {name: ''}
    
        continue() {
            this.props.navigation.navigate('Chat', {name: this.state.name})
        }

        handleInput(text) {
            this.setState({ name: `${text}`})
        } 

        render() {
            return (
                <View style={RoomStyle}> 
                    <View style={RoomCircleStyle} />
                    <View style={RoomViewStyel.marginTop}>
                    </View>
                    <View style={RoomViewStyel.marginHorizontal}>
                        <Text style={RoomHeaderStyel}>User Name</Text>
                        <TextInput style={RoomInputStyel} onChangeText={this.handleInput.bind(this)} />
                        <View style={RoomTouchesStyle}>
                            <TouchableOpacity style={RoomTouchOpacityStyle} onPress={this.continue.bind(this)}>
                                <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }