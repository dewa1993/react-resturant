import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screen/HomeScreen'
import DetailsScreen from './src/screen/DetailsScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Restaurant"
    }
  }
)

export default createAppContainer(navigator)