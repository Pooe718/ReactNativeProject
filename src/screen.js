import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './Home';
import StartScreen from './Start';
import CartScreen from './Cart';

const Screen = createStackNavigator({
  Start: {
    screen: StartScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      header: null,
    },
  },
});
const ScreenApp = createAppContainer(Screen);
export default ScreenApp;
