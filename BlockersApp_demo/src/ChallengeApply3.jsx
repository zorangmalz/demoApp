import React, { useReducer, createContext, useContext, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { ActivityIndicator } from 'react-native';
import {styles, headerIcon} from './challenge 1-2'
import { Header } from 'react-native-elements'
import Icon from 'react=native-vector-icons/Ionicons';
import {stepMethod} from './ChallengeApply1-1';
/*
필요한 기능
1. 사용자가 비밀번호를 입력함
2. 다음버튼을 눌렀을 때 입력한 비밀번호와 DB에 저장된 비밀번호가 일치하는지 확인
3. 비밀번호 일치 시 Verification으로 넘어감
3. 비밀번호가 틀렸을 시 다시 입력
*/

const passwordInput = () => {
    return(
        <View style={styles.viewContainer}>
            <Header 
                leftComponent={{text: 'Challenge', style: {color: 'black', fontSize: 25}}}
                rightComponent={headerIcon}
                style={{borderBottomColor: '#d3d3d3'}}
            />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.fontText, {
                    fontSize: 21, 
                    color: '#707070', 
                    fontWeight: 'bold',
                    alignSelf: 'flex-start'
                }}>비밀번호 입력</Text>>
                <View style={{
                    marginTop: 15,
                    marginBottom: 15
                }}>
                    {stepMethod}
                </View>
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <Text></Text>
                        </View>
                        <Button title="다음" onPress ={() => navigation.navigate('')}/>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

export default passwordInput;