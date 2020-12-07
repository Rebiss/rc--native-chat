import React, { Component} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {RoomStyle,RoomCircleStyle,RoomViewStyel, RoomImageStyel, RoomHeaderStyel, RoomInputStyel, RoomTouchesStyle, RoomTouchOpacityStyle} from '../assets/style/room.style'
import chatImage from  './assets/chat'

export default class RoomC extends Component {
        state = {name: ''}

        continue() {
            this.props.navigation.navigate('Chat', {name: this.state.name})
        }

        render() {
            return (
                <View style={RoomStyle}> 
                    <View style={RoomCircleStyle} />
                    <View style={RoomViewStyel.marginTop}>
                        <Image style={RoomImageStyel} source={chatImage} />
                    </View>
                    <View style={RoomViewStyel.marginHorizontal}>
                        <Text style={RoomHeaderStyel}>User Name</Text>
                        <TextInput styel={RoomInputStyel} onChangeText={user => this.setState({user})} value={this.state.name} />
                        <View style={RoomTouchesStyle}>
                            <TouchableOpacity style={RoomTouchOpacityStyle} onPress={this.continue}>
                                <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }