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

//상단 아이콘
const headerIcon = () => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Icon name="warning" style={{width: '20', height: '20', color: "#79808c"}} />
            <Icon name="ios-notifications" style={{width: 20, height: 20, color: "#79808c"}} />
        </View>
    );
}

//챌린지 첫 화면
export default function Challenge () {
    const [status, setStatus] = ('참가신청');
    const ChallengeListData = [
        {
            id: 'step1',
            title: 'Pre-Challenge 미션 \n 스트레스 관리 방법',
            status: {setStatus}
        },
        {
            id: 'step2',
            title: '주 1회 | 4주 \n D-7 후 신청마감',
            status: {setStatus}
        }
    ];

    //챌린지 목록
    const ChallengeList = ChallengeListData.map(({item}) => (
        <View style={styles.box, {
            paddingTop: 14,
            paddingBottom: 14,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <View style={{
                width: 60, 
                height: 60, 
                backgroundColor: '#76c5b7',
                borderRadius: 30
            }}>
                <Text style={styles.fontText, {color: 'white'}}>{item.id}</Text>
            </View>
            <Text>{item.id}</Text>
            <Text 
                style={styles.fontText,
                {
                    fontSize: 14,
                    color: '#707070'}
                }
            >{item.title}</Text>
            <Button 
                style={styles.buttonStyle, {
                    backgroundColor:'#707070', 
                    fontSize: 16}
                } 
                title={item.status} />
        </View>
    ));

    //챌린지 첫 화면 코딩
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollContainer}>
                    <Header
                        leftComponent={{ text: 'Challenge', style: { color: '#79808c', fontSize: 25 } }}
                        rigthComponent={
                            <headerIcon />
                        }
                        containerStyle={{ borderBottomColor: '#d3d3d3', backgroundColor: '#ffffff' }}
                    />
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('demoApp/src/icon/smoke.png')} style={{ width: 33, height: 33 }} />
                            <Text style={[{ alignSelf: 'center', marginLeft: 10 }, styles.fontText]}>Blockers와 함께하는 6개월 금연챌린지</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingBottom: 5, paddingTop: 8 }}>
                        <Image source={require('demoApp/src/icon/fire.png')} style={{ width: 18, height: 21, marginLeft: 14 }} />
                        <Text style={styles.fontSubTitle}>Challenge Dashboard</Text>
                    </View>
                    <View style={styles.box}>
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
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingBottom: 5, paddingTop: 8 }}>
                        <Image source={require('demoApp/src/icon/list.png')} style={{ width: 23, height: 17, marginLeft: 14 }} />
                        <Text style={[styles.fontSubTitle]}>Challenge List</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

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
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "#48d1cc",
        borderWidth: 3,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        alignSelf: 'stretch'
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