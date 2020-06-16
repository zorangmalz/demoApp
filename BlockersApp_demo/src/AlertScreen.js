
import React, {useEffect} from 'react';
import {StyleSheet, Text, View,ScrollView,Image,Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


const Container = Styled.View`
    flex: 1;
`;

class CommunityScreen extends React.Component {
  static navigationOptions=({navigation,screenProps}) =>({
    title:"Alert",
  });
  render() {
    
    return (
      
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize:30, marginLeft:20}}>
          금연 병원 지도
          </Text>
        
        <View style={styles.containerMap}>
        <Container>
      <MapView style={{flex: 1}} provider={"AIzaSyDhn1ieM-ifTtZLywUNBz-whVDFI1FB1Uk"} />
    </Container>
    <Text>hihi</Text>
        </View>
     
        </ScrollView>  
      </View>
      
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor:"white"
  },
  containerMap: {
    margin:15,
    flex:1,
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
    flex:1,
    backgroundColor: '#fff'
  },
  icon2:{
    width:350,
    height:220
  },
  buttonContainer:{

  width:"35%",
  alignSelf:"center",
  margin:20,
  borderRadius:20,
  
  },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: {  }
});

export default CommunityScreen;