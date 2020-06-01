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
    SectionList,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard
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

const challengeOngoing = () => {
    return (
        <View>
            <View>
                <Text>Challenge</Text>
                <Image />
                <Image />
            </View>
            <View>
                <Image />
                <Text>Blockers와 함께하는 12개월 금연챌린지</Text>
            </View>
            <View>
                <Image />
                <Text>Challenge Dashboard</Text>
            </View>
            <View>
                <Text>{Step}</Text>
                <Text>챌린지 성공!</Text>
                <Button title="보상받기"/>
            </View>
            <View>
                <Image />
                <Text>Challenge List</Text>
            </View>

        </View>
    );
}