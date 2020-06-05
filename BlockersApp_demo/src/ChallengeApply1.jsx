import React, {useState, useReducer, createContext, useContext, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {Header, CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';

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
  },
  hairline: {
    backgroundColor: '#707070',
    width: 100,
    height: 5,
    borderRadius: 5,
    zIndex: 1
  }
});

const ChallengeApply = () => {
  //챌린지 정보
  const challengeInfo = [
    {
      title: '챌린지 금액',
      data: ['50000~100000원']
    },
    {
      title: '인증 횟수',
      data: ['주 1회 총 4회']
    },
    {
      title: '인증 방법',
      data: ['타액검사 사진촬영']
    },
    {
      title: '페널티',
      data: ['12.5% 차감']
    },
    {
      title: '원금보전',
      data: ['50%']
    },
  ];
  
  const stepInfo =[
    {
      title: '1. 키트를 뜯어 입에 문다.'
    },
    {
      title: '2. 셀카를 찍는다.'
    },
    {
      title: '3. 타액검사 키트를 찍는다.'
    },
    {
      title: '4. 사진을 올린다.'
    }
  ];
  const personalCheckData = [
    {
      title: '내용을 충분히 읽고 이해했습니다.'
    },
    {
      title: '개인정보 처리 약관'
    },
    {
      title: '기타 약관'
    }
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollContainer}>
          <Header
            leftComponent={<Text style = {{ color: '#79808c', fontSize: 25 }}>Challenge</Text>}
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
          }]}>참여방법</Text>
          <View style={{
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 10
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <Icon name="numeric-1-circle" size={30} style={{ color: '#48d1cc', zIndex: 2 }} />
              <View style={styles.hairline} />
              <Icon name="numeric-2-circle" size={30} style={{ color: '#707070', zIndex: 2 }} />
              <View style={styles.hairline} />
              <Icon name="numeric-3-circle" size={30} style={{ color: '#707070', zIndex: 2 }} />
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 3
            }}>
              <Text style={[styles.fontText, { fontSize: 12, color: '#707070', marginLeft: 7}]}>참여방법</Text>
              <Text style={[styles.fontText, { fontSize: 12, color: '#707070' , marginLeft: 75, marginRight: 60}]}>챌린지 설정</Text>
              <Text style={[styles.fontText, { fontSize: 12, color: '#707070'}]}>비밀번호 입력</Text>
            </View>
          </View>
          <Text style={[styles.fontText, {
            color: '#707070',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginTop: 20
          }]}>챌린지 정보</Text>
          <View style={[styles.box, {alignItems: 'stretch', padding: 10, borderWidth: 1 }]}>
            <FlatList 
              data={challengeInfo}
              renderItem={({ item }) => <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5
            }}>
                <Text style={styles.fontText}>{item.title}</Text>
                <Text style={styles.fontText}>{item.data}</Text>
              </View>
              }
            />
          </View>
          <Text style={[styles.fontText, {
            color: '#707070',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginTop: 20
          }]}>타액검사 방법</Text>
          <View style={[styles.box, {alignItems: 'stretch', padding: 10, borderWidth: 1 }]}>
            <FlatList 
              data={stepInfo}
              renderItem={({ item }) => <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5
            }}>
                <Text style={styles.fontText}>{item.title}</Text>
              </View>
              }
            />
            <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
              <Image style={{width: 85, height: 85, resizeMode: 'contain'}} source={require('demoApp/src/icon/check1.png')}/>
              <Image style={{width: 85, height: 85, resizeMode: 'contain'}} source={require('demoApp/src/icon/check2.png')}/>
              <Image style={{width: 85, height: 85, resizeMode: 'contain'}} source={require('demoApp/src/icon/check3.png')}/>
            </View>
          </View>
          <Text style={[styles.fontText, {
            color: '#707070',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginTop: 20
          }]}>이용약관 동의</Text>
          <View style={[styles.box, {alignItems: 'stretch', padding: 10, borderWidth: 1 }]}>
            <FlatList 
              data={personalCheckData}
              renderItem={({ item }) => <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: 1
            }}>
                <CheckBox
                  checkedIcon={<Image style={{ width: 19, height: 19 }} source={require('demoApp/src/icon/checkbox.png')} />}
                  uncheckedIcon={<Image style={{ width: 19, height: 19 }} source={require('demoApp/src/icon/uncheckbox.png')} />}
                />
                <Text style={[styles.fontText, {textAlign: 'left'}]}>{item.title}</Text>
              </View>
              }
            />
          </View>
          <TouchableOpacity style={{alignSelf: 'center', marginTop: 14, marginBottom:14}}>
            <View style={[styles.buttonStyle,
              { width: 132, height: 35 }]
            }>
              <Text style={[styles.fontText, {
                fontSize: 21,
                color: 'white'
              }]}>다음</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ChallengeApply;
