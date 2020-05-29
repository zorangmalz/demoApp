import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

class ChatScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  _goToTab() {
    this.props.navigation.replace('TabNavigator');
  }

  render() {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"white"}}>
       <Image
                source={require("BlockersApp/images/BlockersIcon.png")}
                style={styles.icon2}
                />
              <TouchableOpacity onPress={this._goToTab.bind(this)
              }>
                <Image
                source={require("BlockersApp/images/kakao.png")}
                style={styles.icon}
                ></Image>
                </TouchableOpacity>
                
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    icon:{
        width:200,
        height:40,
        
    },
    icon2:{
        marginBottom:50,
        width:300,
        height:300,
    }
  
});

export default ChatScreen;