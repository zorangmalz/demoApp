import React from 'react';
import {StyleSheet, Text, View,ScrollView,Image,Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



class CommunityScreen extends React.Component {
  constructor(props){
    super(props);
    this.states={
      
      tableHead: ['제목', '좋아요', '댓글'], 
      tableData:[
        ["흡연 욕구 억제해주는 방법 Best 5","200","37"],
        ["챌린지로 50만원 모아서 Flex","2","3"],
        ["흡연 7년차 이번엔 진짜...","2","3"],
      ]
    }
    this.state={
      
      
      tableData:[
        ["와 ㄹㅇ 금연 너무 힘들다ㅠㅠ","","1분전"],
        ["챌린지 2단계 성공했지롱","","3분전"],
        ["밥먹고 담배 참는 법","","5분전"],
        ["챌린지 쉽게 성공하는 법","","6분전"],
        ["금연 꿀팁 공유해드립니다","","7분전"],
        ["너무 힘드네요 ㅠㅠ여러분 도와주세요","","8분전"],
      ]
    }
  }
  render() {
    const states = this.states;
    const state=this.state;
    return (
      
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize:30, marginLeft:20}}>
          공지사항
          </Text>
        
        <View style={styles.containerDashboard}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-cash' style={{fontSize:50, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Blockers 3월 기부내역 공지!</Text>
            
          </View>
           
        </View>
     
      <View style={styles.containerCommunity}>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-bulb' style={{fontSize:30, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Hot Post</Text>
      </View>
            <Table>
            <Row data={states.tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={states.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={states.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
        
      </View>
      <View style={styles.containerCommunity}>

<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <Icon name='ios-people' style={{fontSize:30, paddingLeft:10}}/>
      <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Talk</Text>
</View>
      <Table>
     
    <TableWrapper style={styles.wrapper}>
      <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
      <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
    </TableWrapper>
  </Table>
  
</View>
        </ScrollView>  
      </View>
      
    );
    
  }
  // _goToChallenge() {
  //   this.props.navigation.replace('TabNavigator');
  // };
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor:"white"
  },
  containerStatus: {
    margin:15,
    flex:3,
    borderWidth:3,
    borderRadius:10,
    borderColor:'#77C6B8',
  },
  containerDashboard: {
    flex: 1,
    margin:15,
    borderWidth:3,
    borderRadius:10,
    borderColor:'#77C6B8',
    
  },
  containerChallenge: {
    flex: 3,
    margin:15,
    borderWidth:3,
    borderRadius:10,
    borderColor:'#77C6B8',
   
  },
  containerCommunity:{
    margin:15,
    flex:1,
    backgroundColor: '#fff'
  },
  icon2:{
    width:350,
    height:220
  },
  buttonContainer:{

  width:"35%",
  alignSelf:"center",
  margin:20,
  borderRadius:20,
  
  },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: {  }
});

export default CommunityScreen;