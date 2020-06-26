import React, { useReducer, createContext, useContext, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
import { Icon } from 'react-native-elements'
import { ActivityIndicator } from 'react-native';

/*
필요한 기능
0. 시간맞춰서 인증을 하게 됨
1. 앞에서 인증하기에서 통과되었을 때 성공여부를 알려줌
1-1. 성공하면 확인 아이콘 보여지게 함
1-2. 실패하면 체크가 안되고 다시 인증하기
2. Challenge List에서 Step1이 완료되기 전에 Step2,3,4 가 보여지면 안됨
2-1. 완료되면 다음 Step이 보여질 수 있도록 함
3. 다음 Step의 참가신청을 누르면 신청이 되고 위 Dashboard가 변경됨
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

const challengeOngoing = () => {
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
    const stepNumber = [1, 2, 3, 4]
    let number = 27;
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollContainer}>
                    <View style={[styles.box, { borderRadius: 10 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./src/icon/smoke.png')} style={{ width: 33, height: 33 }} />
                            <Text style={[{ alignSelf: 'center', marginLeft: 10 }, styles.fontText]}>Blockers와 함께하는 6개월 금연챌린지</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingBottom: 5, paddingTop: 8 }}>
                        <Image source={require('./src/icon/fire.png')} style={{ width: 18, height: 21, marginLeft: 14 }} />
                        <Text style={styles.fontSubTitle}>Challenge Dashboard</Text>
                    </View>
                    <View style={[styles.box, { borderRadius: 10 }]}>
                        <Text style={[styles.fontSubTitle, { fontWeight: 'bold', paddingTop: 10, paddingBottom: 15 }]}>Step {stepNumber[0]}</Text>
                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ borderColor: 'black', borderWidth: 1, padding: 7 }}>
                                    <Image source={require('./src/icon/correct.png')} style={{ width: 45, height: 45 }} />
                                </View>
                                <Text style={[styles.fontText, { marginTop: 5 }]}>1st</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ borderColor: 'black', borderWidth: 1, borderLeftWidth: 0, padding: 7 }}>
                                    <Image style={{ width: 45, height: 45 }} />
                                </View>
                                <Text style={[styles.fontText, { marginTop: 5 }]}>2nd</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ borderColor: 'black', borderWidth: 1, borderLeftWidth: 0, padding: 7 }}>
                                    <Image style={{ width: 45, height: 45 }} />
                                </View>
                                <Text style={[styles.fontText, { marginTop: 5 }]}>3rd</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ borderColor: 'black', borderWidth: 1, borderLeftWidth: 0, padding: 7 }}>
                                    <Image style={{ width: 45, height: 45 }} />
                                </View>
                                <Text style={[styles.fontText, { marginTop: 5 }]}>4th</Text>
                            </View>
                        </View>
                        <Text style={[styles.fontSubTitle, { paddingTop: 15, paddingBottom: 15 }]}>인증할 시간!! ~{number}</Text>
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
                                }]}>인증하기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingBottom: 5, paddingTop: 5, marginTop: 15 }}>
                        <Image source={require('./src/icon/list.png')} style={{ width: 23, height: 17, marginLeft: 14 }} />
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
}