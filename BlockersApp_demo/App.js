import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from 'BlockersApp/src/HomeScreen';
import CommunityScreen from 'BlockersApp/src/CommunityScreen';
import StatusScreen from 'BlockersApp/src/StatusScreen';
import ChallengeScreen from 'BlockersApp/src/ChallengeScreen';
import MyPageScreen from 'BlockersApp/src/MyPageScreen';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    
  },
  Status: {
    screen: StatusScreen,
  },
  Community: {
    screen: CommunityScreen,
  },
  MyPage: {
    screen: MyPageScreen,
  },
  Challenge: {
    screen: ChallengeScreen,
  },
});
export default createAppContainer(TabNavigator);