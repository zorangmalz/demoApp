import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import KakaoLogins from '@react-native-seoul/kakao-login';

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
  Icon:{
      marginBottom:50,
      width:300,
      height:300,
  }

});

if(!KakaoLogins) {
  console.error('Module is Not Linked');
}

const logCallback = (log, callback) => {
  console.log(log);
  callback;
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
};

const LoginScreen = () => { 
  const [loginLoading, setLoginLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);

  const [toekn, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login()
      .then(result => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished: ${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
      })
      .catch(err => {
        if(err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled: ${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed: ${err.code} ${err.message}`,
            setLoginLoading(false),
          );
        }
      });
  };

  const kakoLogout = () => {
    logCallback('Logout Start', setLogoutLoading(true));

    KakaoLogins.logout()
      .then(result => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        logCallback(`Logout Finished: ${result}`, setLogoutLoading(false));
      })
      .catch(err => {
        logCallback(
          `Logout Failed: ${err.code} ${err.message}`,
          setLogoutLoading(false),
        );
      });
      
  };

  const getProfile = () => {
    logCallback('Get Profile Start', setProfileLoading(true));

    KakaoLogins.getProfile()
      .then(result => {
        setProfile(result);
        logCallback(
          `Get Profile Finished: ${JSON.stringify(result)}`,
          setProfileLoading(false),
        );
      })
      .catch(err => {
        logCallback(
          `Get Profile Failed: ${err.code} ${err.message}`,
          setProfileLoading(false),
        );
      });
  };

  const {id, email, profile_image_url: photo} = profile;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#ffffff'}}>
        <View>
          <Image
            source={require("demoApp/src/icon/BlockersIcon.png")}
            style={styles.Icon}
          />
          <TouchableOpacity onPress={kakaoLogin} style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require("demoApp/src/icon/kakao.png")}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;