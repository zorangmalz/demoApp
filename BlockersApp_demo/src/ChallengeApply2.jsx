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
  Modal,
} from 'react-native';


import {Header, CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/FontAwesome';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { WebView } from 'react-native-webview';

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
  },
  line : {
    width: 50,
    height: 2,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#707070'
  },
  passicon: {
    marginRight: 21.5,
    marginLeft: 21.5
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18
  },
});

const challengeApply2 = () => {
  const [token, setToken] = useState(0);
  const [addr, setAddr] = useState('');
  const [extraAddr, setExtraAddr] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchAddr, setSearchAddr]=useState('');
  const HTML = require('demoApp/src/address.html')

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <WebView
              source = {HTML}
            />
          </Modal>
          <Header
            leftComponent={<Text style = {{ color: '#79808c', fontSize: 25 }}>Challenge</Text>}
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
          }]}>챌린지설정</Text>
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
              <Icon name="numeric-1-circle" size={30} style={{ color: '#707070', zIndex: 2 }} />
              <View style={styles.hairline} />
              <Icon name="numeric-2-circle" size={30} style={{ color: '#48d1cc', zIndex: 2 }} />
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
            marginBottom: 10
          }]}>챌린지 금액설정</Text>
          <View style={{ alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
            <TextInput
              onChange={number => setToken(number)}
              keyboardType="number-pad"
              placeholder="최대 100,000"
              textAlign="left"
              onSubmitEditing={Keyboard.dismiss}
              style={{
                width: 160,
                height: 40,
                marginRight: 5,
                borderWidth: 1,
                borderColor: '#707070',
                backgroundColor: '#ffffff',
                borderRadius: 5,
                fontSize: 15
              }}
            />
            <Text style={[styles.fontText, { alignSelf: 'center', fontSize: 21, textAlign: 'left' }]}>Block</Text>
          </View>
          <Text style={[styles.fontText, {
            color: '#707070',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginBottom: 9
          }]}>주소 입력</Text>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <TextInput
                onChange={number => setToken(number)}
                keyboardType="number-pad"
                placeholder="우편번호"
                textAlign="left"
                onSubmitEditing={Keyboard.dismiss}
                style={{
                  width: 108,
                  height: 40,
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: '#707070',
                  backgroundColor: '#ffffff',
                  borderRadius: 5,
                  fontSize: 15,
                  marginBottom: 9
                }}
              />
              <TouchableOpacity style={{alignSelf:'center', marginBottom: 9}}>
                <View style={styles.buttonStyle}>
                  <Text 
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                    style={[styles.fontText, { 
                    color: 'white', 
                    fontWeight: 'bold', 
                    marginLeft: 18, 
                    marginRight: 18}]}
                  >검색</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TextInput
              onChangeText={text => setAddr(text)}
              placeholder="주소"
              textAlign="left"
              onSubmitEditing={Keyboard.dismiss}
              style={{
                alignSelf: 'stretch',
                height: 40,
                borderWidth: 1,
                borderColor: '#707070',
                backgroundColor: '#ffffff',
                borderRadius: 5,
                fontSize: 15,
                marginBottom: 9
              }}
            />
            <TextInput
              onChangeText={text => setExtraAddr(text)}
              placeholder="상세주소"
              textAlign="left"
              onSubmitEditing={Keyboard.dismiss}
              style={{
                alignSelf: 'stretch',
                height: 40,
                borderWidth: 1,
                borderColor: '#707070',
                backgroundColor: '#ffffff',
                borderRadius: 5,
                fontSize: 15,
                marginBottom: 9
              }}
            />
          </View>
          <TouchableOpacity style={{marginTop: 15, alignSelf:'center'}}>
            <View style={[styles.buttonStyle,
              { width: 132, height: 35 }]
            }>
              <Text style={styles.fontText, {
                fontSize: 21,
                color: 'white'
              }}>다음</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default challengeApply2;


