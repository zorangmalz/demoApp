import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TutorialScreen from './TutorialScreen';
import HomeScreen from 'BlockersApp/src/HomeScreen';
import CommunityScreen from 'BlockersApp/src/CommunityScreen';
import StatusScreen from 'BlockersApp/src/StatusScreen';
import ChallengeScreen from 'BlockersApp/src/ChallengeScreen';
import MyPageScreen from 'BlockersApp/src/MyPageScreen';
import IconWithBadge from './IconWithBadge';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const HomeStack=createStackNavigator(
    {
        HomeScreen
    },
    {
        defaultNavigationOptions:({navigation})=>({
            title:"Home",
            headerRight:()=> <Icon name='ios-home' style={{fontSize:20,paddingRight:20}}/>,
           

        }),
    }
)
const ChallengeStack=createStackNavigator(
    {
        ChallengeScreen
    },
    {
        defaultNavigationOptions:({navigation})=>({
            title:"Challenge",
        }),
    }
)
const StatusStack=createStackNavigator(
    {
        StatusScreen
    },
    {
        defaultNavigationOptions:({navigation})=>({
            title:"Status",
        }),
    }
)
const CommunityStack=createStackNavigator(
    {
        CommunityScreen
    },
    {
        defaultNavigationOptions:({navigation})=>({
            title:"Community",
        }),
    }
)
const MyPageStack=createStackNavigator(
    {
        MyPageScreen
    },
    {
        defaultNavigationOptions:({navigation})=>({
            title:"MyPage",
        }),
    }
)
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Challenge:ChallengeStack,
    Status:StatusStack,
    Community:CommunityStack,
    MyPage:MyPageStack
    
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      swipeEnabled: true,
      adaptive: true,
      tabBarIcon: ({horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Challenge') {
          iconName = 'ios-star-outline';
        
        } else if (routeName === 'Status') {
          iconName = 'ios-stats';
        }else if (routeName === 'Community') {
            iconName = 'ios-chatbubbles';
            IconComponent=HomeIconWithBadge;
          }else if (routeName === 'MyPage') {
            iconName = 'ios-person';
          }

        return (
          <IconComponent
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#77C6B8',
      inactiveTintColor: 'gray',
    //   style: {
    //     backgroundColor: 'black',
    //   },
    },
  },
);

const App = createStackNavigator({
  screen: TutorialScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#633689',
    //   },
    //   headerTintColor: '#FFFFFF',
      headerShown: false,
    },
  },
});
export default createAppContainer(App);