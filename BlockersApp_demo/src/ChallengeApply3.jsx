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
import { Header } from 'react-native-elements'
import Icon from 'react=native-vector-icons/Ionicons';
/*
필요한 기능
1. 사용자가 비밀번호를 입력함
2. 다음버튼을 눌렀을 때 입력한 비밀번호와 DB에 저장된 비밀번호가 일치하는지 확인
3. 비밀번호 일치 시 Verification으로 넘어감
3. 비밀번호가 틀렸을 시 다시 입력
*/

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
        marginTop: 10,
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

const passwordInput = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollContainer}>
                    <Text style={styles.fontText, {
                        fontSize: 21,
                        color: '#707070',
                        fontWeight: 'bold',
                        alignSelf: 'flex-start'
                    }}>비밀번호 입력</Text>
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
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <IconIcon name='minus' size={50} />
                            <IconIcon name='minus' size={50} style={{ marginLeft: 20, marginRight: 10 }} />
                            <IconIcon name='minus' size={50} style={{ marginRight: 20, marginLeft: 10 }} />
                            <IconIcon name='minus' size={50} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 30, alignSelf: 'center' }}>
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
}

export default passwordInput;