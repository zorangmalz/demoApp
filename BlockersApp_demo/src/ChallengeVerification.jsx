/*
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

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Header, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

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

function Takephoto () {
  const cameraRef = useRef(null);
  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality:1,
        exif: true,
      });
      console.log('data', data);
    }
  }
  return (
    <>
      <RNCamera 
        ref={cameraRef}
        style={{
          width: 200,
          height: 200,
        }}
        captureAudio={false}
      />
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={takePhoto}>
          <Button style={{
            width: 100, 
            height: 100, 
            borderRadius: 50,
            borderWidth: 10,
            borderColor: '#707070',
            backgroundColor: '#48d1cc'
          }} />
        </TouchableOpacity>
      </View>
    </>
  )
};

const ChallengeVerification = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
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
          <Text style={[styles.fontText, { textAlign: 'left', fontSize: 25, marginTop:15, marginBottom: 25}]}>Verificaion</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={Takephoto}
              >
                <Avatar
                  size={120}
                  source={require('demoApp/src/icon/plus.png')}
                  activeOpacity={0.7}
                  containerStyle={{padding: 20, backgroundColor: 'white', borderColor: '#77c6b8', borderRadius: 14, borderWidth: 3 }}
                />
              </TouchableOpacity>
              <Text style={[styles.fontText, { fontWeight: 'bold', marginTop:15 }]}>입에 문 사진</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={Takephoto}
              >
                <Avatar
                  size={120}
                  source={require('demoApp/src/icon/plus.png')}
                  activeOpacity={0.7}
                  containerStyle={{padding: 20, backgroundColor: 'white', borderColor: '#77c6b8', borderRadius: 14, borderWidth: 3 }}
                />
              </TouchableOpacity>
              <Text style={[styles.fontText, { fontWeight: 'bold', marginTop:15 }]}>음성 키트 사진</Text>
            </View>
          </View>
          <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text style={[styles.fontSubTitle, {marginTop:20, marginBottom: 15}]}>인증방법</Text>
            <View style={{marginLeft: 30, marginRight: 30, alignItems: 'flex-start'}}>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>1. 입에 타액검사 키트를 문 사진 1장 첨부</Text>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>2. 음성반응이 나온 타액검사 키트 사진 1장 첨부</Text>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>3. 인증샷 간격은 최대 5분입니다.</Text>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>4. 인증 성공여부는 2~3일 내로 진행도에서 확인 가능합니다.</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[styles.buttonStyle, {marginTop: 10, alignSelf: 'center', width: 132, height: 35 }]}>
              <Text style={[styles.fontText, { fontSize: 21, color: 'white' }]}>인증하기</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ChallengeVerification;*/

import React, {Fragment, Component, useState, useReducer, createContext, useContext, useRef } from 'react';
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

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Header, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

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

const ChallengeVerification = () => {
  const [imageSource, setImageSource] = useState<string|undefined>(undefined);
  const [ImageSource, SetImageSource] = useState<string|undefined>(undefined);
  const options = {
    title: 'Load Photo',
    customButtons: [
      {name: 'button_id_1', title: 'CustomButton 1'},
      {name: 'button_id_2', title: 'CustomButton 2'}
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    }
  };

  const showImagePicker1 = (): void => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response =', response);

      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        setImageSource(response.uri);
      }
    });
  };

  const showImagePicker2 = (): void => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response =', response);

      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        SetImageSource(response.uri);
      }
    });
  };

  const showCamera = () : void => {
    ImagePicker.launchCamera(options, (response) => {
      if(response.error) {
        console.log('LaunchCamera Error: ', response.error);
      }
      else {
        setImageSource(response.uri);
      }
    });
  };

  const showCameraRoll = (): void => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if(response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      }
      else {
        setImageSource(response.uri);
      }
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
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
          <Text style={[styles.fontText, { textAlign: 'left', fontSize: 25, marginTop:15, marginBottom: 25}]}>Verificaion</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={showImagePicker1}
                activeOpacity={0.7}
              >
                <View style={{width: 120, height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#77c6b8', borderRadius: 14, borderWidth: 3 }}>
                  {imageSource && <Image style={{width: 120, height:120}} resizeMode='stretch' source={{uri: imageSource}}/>}
                </View>
              </TouchableOpacity>
              <Text style={[styles.fontText, { fontWeight: 'bold', marginTop:15 }]}>입에 문 사진</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={showImagePicker2}
                activeOpacity={0.7}
              >
                <View style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#77c6b8', borderRadius: 14, borderWidth: 3 }}>
                  {ImageSource && <Image style={{ width: 120, height: 120 }} resizeMode='stretch' source={{ uri: ImageSource }} />}
                </View>
              </TouchableOpacity>
              <Text style={[styles.fontText, { fontWeight: 'bold', marginTop:15 }]}>음성 키트 사진</Text>
            </View>
          </View>
          <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text style={[styles.fontSubTitle, {marginTop:20, marginBottom: 15}]}>인증방법</Text>
            <View style={{marginLeft: 30, marginRight: 30, alignItems: 'flex-start'}}>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>1. 입에 타액검사 키트를 문 사진 1장 첨부</Text>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>2. 음성반응이 나온 타액검사 키트 사진 1장 첨부</Text>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>3. 인증샷 간격은 최대 5분입니다.</Text>
              <Text style = {[styles.fontText, {marginBottom: 10}]}>4. 인증 성공여부는 2~3일 내로 진행도에서 확인 가능합니다.</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={[styles.buttonStyle, {marginTop: 10, alignSelf: 'center', width: 132, height: 35 }]}>
              <Text style={[styles.fontText, { fontSize: 21, color: 'white' }]}>인증하기</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ChallengeVerification;
