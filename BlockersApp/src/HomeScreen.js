import React from 'react';
import {StyleSheet, Text, View,ScrollView,Image,Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';




class HomeScreen extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerStatus}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
             <Icon name='ios-stats' style={{fontSize:20,paddingLeft:10}}/>
             <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Status Dashboard</Text>

            </View>
            <Image
                source={require("BlockersApp/images/status.png")}
                style={styles.icon2}
                />
          </View>
        
        <View style={styles.containerDashboard}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-cash' style={{fontSize:50, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Blockers 3월 기부내역 공지!</Text>
            
          </View>
           
        </View>
      <View style={styles.containerChallenge}>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-flame' style={{fontSize:30, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Challenge Dashboard</Text>
            
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>진행중인 챌린지가 없습니다</Text>
          <View style={{margin:15}}>
            <Text style={{fontSize:18,fontFamily:"arial",margin:10}}>챌린지 참여자는 평균적으로 80%의 금연 성공률과 20,000$의 리워드를 수령했습니다!</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
        {/* <TouchableOpacity onPress={this._goToChallenge.bind(this)}> */}
          <Button 
        title="참여하기"
        color="#77c6b8"
        ></Button>
        {/* </TouchableOpacity> */}
        </View>
      </View>
        </ScrollView>  
      </View>
      
    );
    
  }
  // _goToChallenge() {
  //   this.props.navigation.replace('TabNavigator');
  // };
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor:"white"
  },
  containerStatus: {
    margin:15,
    flex:3,
    borderWidth:3,
    borderRadius:10,
    borderColor:'#77C6B8',
  },
  containerDashboard: {
    flex: 1,
    margin:15,
    borderWidth:3,
    borderRadius:10,
    borderColor:'#77C6B8',
    
  },
  containerChallenge: {
    flex: 3,
    margin:15,
    borderWidth:3,
    borderRadius:10,
    borderColor:'#77C6B8',
   
  },
  containerCommunity:{
    margin:15,
    
  },
  icon2:{
    width:350,
    height:220
  },
  buttonContainer:{

  width:"35%",
  alignSelf:"center",
  margin:20,
  borderRadius:20
  }
});

export default HomeScreen;