import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import RoomC from './view/RoomC'
import ChatC from './view/ChatC'

const AppNavigation = createStackNavigator(
  {
    Room: RoomC,
    Chat: ChatC
  },
  {
    handlerMode: "none"
  }
)

export default createAppContainer(AppNavigation)