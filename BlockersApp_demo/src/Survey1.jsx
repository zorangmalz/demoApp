import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';

import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';

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

const surVey = () => {
  const [BorderWidth, setBorderWidth]=useState(1);
  const onPressWidth = () => {
    setBorderWidth(1)
  };
  const [token, setToken] = useState(0);

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
                <IconIcon name="warning" size={5} style={{backgroundColor: "#707070" }} />
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
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 10
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'center'
            }}>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="numeric-1-circle" size={30} style={{ color: '#707070' }} />
                <Text style={[styles.fontText, { fontSize: 12, color: '#707070' }]}>흡연량 진단</Text>
              </View>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 70,
                marginRight: 60
              }}>
                <Icon name="numeric-2-circle" size={30} style={{ color: '#707070' }} />
                <Text style={[styles.fontText, { fontSize: 12, color: '#707070' }]}>스트레스 진단</Text>
              </View>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="numeric-3-circle" size={30} style={{ color: '#707070' }} />
                <Text style={[styles.fontText, { fontSize: 12, color: '#707070' }]}>흡연요인 진단</Text>
              </View>
            </View>
          </View>
          <View style={{padding: 10, justifyContent: 'center', alignItems: 'flex-start', marginTop: 5}}>
            <Text style={[styles.fontText, {fontWeight: 'normal', textAlign: 'left'}]}>여러분의 금연을 도와드리기 위해</Text>
            <Text style={[styles.fontText, {fontWeight: 'normal', textAlign: 'left'}]}>간단한 정보를 알려주세요!</Text>
          </View>
          <View style={{paddingLeft: 20, paddingRight: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text style={[styles.fontText, {fontWeight: 'normal', textAlign: 'left', alignSelf: 'flex-start', marginBottom: 7}]}>1. 하루에 몇개피의 담배를 피우시나요?</Text>
            <View style={{alignSelf: 'stretch', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
              <View style = {{alignSelf:'stretch', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <IconIcon size={20} name='circle' style={{color: '#707070'}} />
                <IconIcon size={20} name='circle' style={{color: '#707070', marginLeft: 40}} />
                <IconIcon size={20} name='circle' style={{color: '#707070', marginLeft: 40, marginRight: 40}} />
                <IconIcon size={20} name='circle' style={{color: '#707070', marginRight: 40}} />
                <IconIcon size={20} name='circle' style={{color: '#707070'}} /> 
              </View>
              <View style = {{alignSelf:'stretch', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 3}}>
                <Text style={[styles.fontText, {fontSize: 12, fontWeight: 'normal', color: '#707070', marginRight: 49}]}>0</Text>
                <Text style={[styles.fontText, {fontSize: 12, fontWeight: 'normal', color: '#707070', marginRight: 49}]}>5</Text>
                <Text style={[styles.fontText, {fontSize: 12, fontWeight: 'normal', color: '#707070'}]}>10</Text>
                <Text style={[styles.fontText, {fontSize: 12, fontWeight: 'normal', color: '#707070', marginLeft: 43}]}>15</Text>
                <Text style={[styles.fontText, {fontSize: 12, fontWeight: 'normal', color: '#707070', marginLeft: 43}]}>20</Text>
              </View>
            </View>
            <Text style={[styles.fontText, {fontWeight: 'normal', textAlign: 'left', alignSelf: 'flex-start', marginBottom: 7}]}>2. 아침에 일어나 얼마만에 흡연을 하시나요?</Text>
            <TouchableOpacity style={{alignSelf: 'stretch'}} onPress={onPressWidth}>
              <View style={[styles.box, {borderColor: '#79808c', borderRadius: 26, borderWidth: BorderWidth}]}>
                <Text style={[styles.fontText, {fontWeight: 'bold'}]}>5분이내</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch'}} onPress={onPressWidth}>
              <View style={[styles.box, {borderColor: '#79808c', borderRadius: 26, borderWidth: BorderWidth}]}>
                <Text style={[styles.fontText, {fontWeight: 'bold'}]}>5분~30분</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch'}} onPress={onPressWidth}>
              <View style={[styles.box, {borderColor: '#79808c', borderRadius: 26, borderWidth: BorderWidth}]}>
                <Text style={[styles.fontText, {fontWeight: 'bold'}]}>30분~1시간</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch'}} onPress={onPressWidth}>
              <View style={[styles.box, {borderColor: '#79808c', borderRadius: 26, borderWidth: BorderWidth}]}>
                <Text style={[styles.fontText, {fontWeight: 'bold'}]}>1시간 이상</Text>
              </View>
            </TouchableOpacity>
            <Text style={[styles.fontText, {fontWeight: 'normal', textAlign: 'left', alignSelf: 'flex-start', marginTop: 10, marginBottom: 10}]}>3. 얼마나 오랫동안 흡연을 하셨나요?</Text>
            <View style={{justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
              <TextInput
                onChange={number => setToken(number)}
                keyboardType="number-pad"
                textAlign='right'
                onSubmitEditing={Keyboard.dismiss}
                style={{
                  width: 90,
                  height: 35,
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: '#ffffff',
                  backgroundColor: '#ffffff',
                  fontSize: 15,
                }}
              />
              <Text style={[styles.fontText,{fontWeight: 'bold', borderBottomColor: '#79808c'}]}>년</Text>
            </View>
          </View>
          <TouchableOpacity style={{marginTop: 30, alignSelf:'center', marginBottom: 30}}>
            <View style={[styles.buttonStyle,
              { width: 95, height: 35 }]
            }>
              <Text style={styles.fontText, {
                color: 'white'
              }}>다음</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default surVey;
