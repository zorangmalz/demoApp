import React, {useState, useReducer, createContext, useContext, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import Icon from 'reactnative-vector-icons/Ionicons';

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

//챌린지 첫 화면
export default function Challenge () {
    const [status, setStatus] = ('참가신청');
    const ChallengeListData = [
        {
            id: 'step1',
            title: 'Pre-Challenge 미션 \n 스트레스 관리 방법',
        },
        {
            id: 'step2',
            title: '주 1회 | 4주 \n D-7 후 신청마감',
        }
    ];

    //챌린지 첫 화면 코딩
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollContainer}>
                    <View style={[styles.box, { borderRadius: 10 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('demoApp/src/icon/smoke.png')} style={{ width: 33, height: 33 }} />
                            <Text style={[{ alignSelf: 'center', marginLeft: 10 }, styles.fontText]}>Blockers와 함께하는 6개월 금연챌린지</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingBottom: 5, paddingTop: 8 }}>
                        <Image source={require('demoApp/src/icon/fire.png')} style={{ width: 18, height: 21, marginLeft: 14 }} />
                        <Text style={styles.fontSubTitle}>Challenge Dashboard</Text>
                    </View>
                    <View style={[styles.box, { borderRadius: 10 }]}>
                        <Text style={[styles.fontSubTitle, { paddingTop: 30 }]}>진행중인 챌린지가 없습니다</Text>
                        <Text multiline style={[styles.fontText, { marginBottom: 30, paddingTop: 10, textAlign: 'center', fontWeight: 'normal' }]}>챌린지 참여자는 평균적으로 80%의 금연 성공률과 20,000원의 리워들를 수령했습니다!</Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ChallengeApply')
                            }
                        >
                            <View style={[styles.buttonStyle,
                            { width: 132, height: 35 }]
                            }>
                                <Text style={[styles.fontText, {
                                    fontSize: 21,
                                    color: '#ffffff'
                                }]}>참여하기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingBottom: 5, paddingTop: 5, marginTop: 15 }}>
                        <Image source={require('demoApp/src/icon/list.png')} style={{ width: 23, height: 17, marginLeft: 14 }} />
                        <Text style={[styles.fontSubTitle]}>Challenge List</Text>
                    </View>
                    <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
                        <FlatList
                            data={ChallengeListData}
                            renderItem={({ item }) => <View style={{
                                alignSelf: 'stretch',
                                paddingTop: 14,
                                paddingBottom: 14,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignSelf: 'stretch',
                                borderColor: "#48d1cc",
                                borderWidth: 3,
                                alignItems: 'center',
                                marginBottom: 7,
                                borderRadius: 10
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    backgroundColor: '#76c5b7',
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 12,
                                    marginRight: 30
                                }}>
                                    <Text style={[styles.fontText, { color: 'white' }]}>{item.id}</Text>
                                </View>
                                <Text
                                    style={[styles.fontText,
                                    {
                                        fontSize: 14,
                                        color: '#707070',
                                        textAlign: 'center'
                                    }]
                                    }
                                >{item.title}</Text>
                                <TouchableOpacity onPress={() => {
                                    setStatus('완료');
                                }}>
                                    <View style={[styles.buttonStyle, { backgroundColor: '#707070', width: 95, height: 30, marginRight: 10, marginLeft: 30 }]}>
                                        <Text style={{ fontSize: 16, color: '#ffffff' }}>참가신청</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            }
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};