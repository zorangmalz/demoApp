import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  viewContainer: {
      backgroundColor: 'white',
  },
  scrollContainer: {
      backgroundColor: "#ffffff",
      paddingRight: 18,
      paddingLeft: 18,
  },
  box: {
      marginTop : 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderColor: "#48d1cc",
      borderWidth: 3,
      alignItems: 'center',
  },
  fontText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#79808c'
  },
  fontSubTitle: {
      fontSize: 21,
      fontWeight: '600',
      marginLeft: 10,
      color: '#79808c'
  },
  buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      backgroundColor: '#48d1cc'
  }
});

const SurVey = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollContainer}>
          <Header
            leftComponent={<Text style = {{ color: '#79808c', fontSize: 18 }}>Blockers</Text>}
            rigthComponent={
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              </View>
            }
            containerStyle={{width: Dimensions.get('window').width, borderBottomColor: '#d3d3d3', backgroundColor: '#ffffff' }}
          />
          <Text style={[styles.fontText, {
            fontSize: 21,
            color: '#707070',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginTop: 15,
          }]}>솔루션 진단</Text>
          <View style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            alignSelf: 'center', 
            width: 164, 
            height: 164, 
            marginTop: 24, 
            borderWidth: 1, 
            borderRadius: 60, 
            backgroundColor: '#ffffff',
            marginBottom: 14
          }}>
            <Image style={{resizeMode: 'contain'}}/>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'stretch' }}>
            <Text style={[styles.fontText, { fontWeight: 'normal', fontSize: 21, marginBottom: 15 }]}>김현명님은 스트레스 성 흡연자 입니다.</Text>
            <Text style={[styles.fontText, { fontWeight: 'normal', fontSize: 14 }]}>Blockers의 챌린지와 취미생활을 통해</Text>
            <Text style={[styles.fontText, { fontWeight: 'normal', fontSize: 14 }]}>금연을 할 수 있습니다.</Text>
            <Text style={[styles.fontText, { fontWeight: 'normal', fontSize: 14 }]}>35%의 사용자는 스트레스형 흡연자이며</Text>
            <Text style={[styles.fontText, { fontWeight: 'normal', fontSize: 14 }]}>이중 70%는 Blockers를 통해 금연에 성공했습니다.</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Image source={require('demoApp/src/icon/chart.png')}/>
          </View>
          <View style={{paddingLeft: 25, marginTop: 5}}>
            <Text style={{marginTop: 15}}>
              <Text style={[styles.fontText, {fontSize: 14, fontWeight: 'normal'}]}>지금까지 </Text>
              <Text style={[styles.fontText, {fontSize: 14, fontWeight: 'bold'}]}>10,000,000원 </Text>
              <Text style={[styles.fontText, {fontSize: 14, fontWeight: 'normal'}]}>을 지출했으며</Text>
            </Text>
            <Text style={{marginTop: 15}}>
              <Text style={[styles.fontText, {fontSize: 14, fontWeight: 'normal'}]}>앞으로 </Text>
              <Text style={[styles.fontText, {fontSize: 14, fontWeight: 'bold'}]}>50,000,000원 </Text>
              <Text style={[styles.fontText, {fontSize: 14, fontWeight: 'normal'}]}>의 지출이 예상됩니다.</Text>
            </Text>
          </View>
          <TouchableOpacity style={{marginTop: 30, alignSelf:'center', marginBottom: 30}}>
            <View style={[styles.buttonStyle,
              { width: 132, height: 40 }]
            }>
              <Text style={styles.fontText, {
                color: 'white',
                fontSize: 21
              }}>시작하기</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SurVey;
