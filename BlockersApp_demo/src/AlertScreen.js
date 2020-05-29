
import React, {useEffect} from 'react';
import {StyleSheet, Text, View,ScrollView,Image,Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PermissionsAndroid,Platform, Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";


const P0 = {latitude: 37.564362, longitude: 126.977011};
const P1 = {latitude: 37.565051, longitude: 126.978567};
const P2 = {latitude: 37.565383, longitude: 126.976292};
const P4 = {latitude: 37.564834, longitude: 126.977218};


const MapViewScreen = ({navigation}) => {
  useEffect(() => {
      requestLocationPermission();
  }, []);

  return <>
      <NaverMapView style={{width: '100%', height: '100%'}}
                    showsMyLocationButton={true}
                    center={{...P0, zoom: 16}}
                    onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
                    onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
                    onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
                    useTextureView>
          <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')}/>
          <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>
          <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>
         
          <Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10}/>
          <Polyline coordinates={[P1, P2]} onClick={() => console.warn('onClick! polyline')}/>
          <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => console.warn('onClick! circle')}/>
          <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.warn('onClick! polygon')}/>
      </NaverMapView>
      <TouchableOpacity style={{position: 'absolute', bottom: '10%', right: 8}} onPress={() => navigation.navigate('stack')}>
          <View style={{backgroundColor: 'gray', padding: 4}}>
              <Text style={{color: 'white'}}>open stack</Text>
          </View>
      </TouchableOpacity>
      <Text style={{position: 'absolute', top: '95%', width: '100%', textAlign: 'center'}}>Icon made by Pixel perfect from www.flaticon.com</Text>
  </>
};

async function requestLocationPermission() {
  if (Platform.OS !== 'android') return;
  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
              title: 'Location Permission',
              message: 'show my location need Location permission',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
          },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
      } else {
          console.log('Location permission denied');
      }
  } catch (err) {
      console.warn(err);
  }
}

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
          <View >
           <MapViewScreen/>
          </View>
           
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