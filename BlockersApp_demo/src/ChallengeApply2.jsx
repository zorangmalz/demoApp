import React, {useState, useReducer, createContext, useContext, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Keyboard,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/FontAwesome';
import DaumPostcode from 'react-daum-postcode';
import WebView from 'react-native-webview';

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
  modalView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18
  }
});

const ChallengeApply2 = () => {
  const [token, setToken] = useState(0);
  const [addr, setAddr] = useState('');
  const [extraAddr, setExtraAddr] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchAddr, setSearchAddr]=useState('');

  const searchScreen = () => {
    <WebView style={{flex:1}} source={{ html :
    
    <html>
      <input type="text" id="sample6_postcode" placeholder="우편번호" />
      <input type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기" />
      <input type="text" id="sample6_address" placeholder="주소" />
      <input type="text" id="sample6_detailAddress" placeholder="상세주소" />
      <input type="text" id="sample6_extraAddress" placeholder="참고항목" />
    </html>
    <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script>
        function sample6_execDaumPostcode() {
            new daum.Postcode({
                oncomplete: function(data) {
                    var addr = ''; // 주소 변수
                    var extraAddr = ''; // 참고항목 변수
                    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                        addr = data.roadAddress;
                    } else { // 사용자가 지번 주소를 선택했을 경우(J)
                        addr = data.jibunAddress;
                    }

                    if(data.userSelectedType === 'R'){
                        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                            extraAddr += data.bname;
                        }
                        if(data.buildingName !== '' && data.apartment === 'Y'){
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        if(extraAddr !== ''){
                            extraAddr = ' (' + extraAddr + ')';
                        }
                        document.getElementById("sample6_extraAddress").value = extraAddr;
                
                    } else {
                        document.getElementById("sample6_extraAddress").value = '';
                    }
                    document.getElementById('sample6_postcode').value = data.zonecode;
                    document.getElementById("sample6_address").value = addr;
                    document.getElementById("sample6_detailAddress").focus();
                }
            }).open();
        }
    </script>
  }}/>};

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollContainer}>
          <Modal
            animationType="slide"
            transparent = {true}
            visible={modalVisible}
          >
            <View style={styles.modalView}>
              <IconIcon 
                name="close" 
                size={30} 
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{alignSelf: 'flex-start',
                  marginLeft: 10
                }} 
              />
              <Text style={[styles.fontSubTitle, {
                alignSelf: 'flex-start',
                marginTop: 10
              }]}>지번, 도로명을 입력하세요</Text>
              <View style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10
              }}>
                <TextInput 
                  onChange={target => setSearchAddr(target)}
                  placeholder="예) 킹스로 145 또는 블로커스사무실"
                  textAlign="left"
                  onSubmitEditing={Keyboard.dismiss}
                  style={{
                    alignSelf: '',
                    borderWidth:0.3,
                    borderColor: '#707070',
                    borderRadius: 1,
                    marginRight: 7,
                    padding: 5,
                    fontSize: 15,
                    height: 30,
                    alignSelf: 'stretch',
                    backgroundColor: '#ffffff'
                  }}
                />
                <TouchableOpacity onPress={searchScreen}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 0.3,
                    borderColor: '#707070',
                    borderRadius: 1,
                    padding: 10
                  }}>
                    <IconIcon name="search" size={25} style={{ color: '#707070' }} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
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
              alignItems: 'stretch',
              justifyContent: 'center'
            }}>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="numeric-1-circle" size={30} style={{ color: '#707070' }} />
                <Text style={[styles.fontText, { fontSize: 12, color: '#707070' }]}>참여방법</Text>
              </View>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 70,
                marginRight: 60
              }}>
                <Icon name="numeric-2-circle" size={30} style={{ color: '#707070' }} />
                <Text style={[styles.fontText, { fontSize: 12, color: '#707070' }]}>챌린지 설정</Text>
              </View>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="numeric-3-circle" size={30} style={{ color: '#707070' }} />
                <Text style={[styles.fontText, { fontSize: 12, color: '#707070' }]}>비밀번호 입력</Text>
              </View>
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
                      setModalVisible(true);
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

export default ChallengeApply2;

