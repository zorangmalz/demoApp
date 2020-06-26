import React from 'react';
import {StyleSheet, Text, View,ScrollView,Image,Button} from 'react-native';
import AlertScreen from 'BlockersApp/src/AlertScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Header } from 'react-native/Libraries/NewAppScreen';


function AlertIcon(props){
  return(
    <TouchableHighlight onPress={()=>navigation.navigate("Details")}>
      <Icon  name='ios-alert' style={{fontSize:20,paddingLeft:10}}/>
    </TouchableHighlight>
    
  )
}
class HomeScreen extends React.Component {

  static navigationOptions=({navigation,screenProps}) =>({
    title:"Home",
    headerRight:()=>(
        <TouchableHighlight onPress={()=>navigation.navigate("Details")}>
      <Icon name="ios-alert" style={{fontSize:20,paddingLeft:10}}/>
        </TouchableHighlight>
    )
  });
  constructor(props){
    super(props);
    this.state={
      
      tableHead: ['제목', '좋아요', '댓글'], 
      tableData:[
        ["흡연 욕구 억제해주는 방법 Best 5","200","37"],
        ["챌린지로 50만원 모아서 Flex","2","3"],
        ["흡연 7년차 이번엔 진짜...","2","3"],
      ]
    }
  }
  // _goToChallenge() {
  //   this.props.navigation.replace("AlertScreen");
  // };
  render() {
    const state = this.state;
    return (
      
      <View style={styles.container}>
      
        <ScrollView>
          <View style={styles.containerStatus}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
             <Icon name='ios-stats' style={{fontSize:20,paddingLeft:10}}/>
             <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Status Dashboard</Text>

            </View>
            <Image
                source={require("BlockersApp/images/status.png")}
                style={styles.icon2}
                />
          </View>
        
        <View style={styles.containerDashboard}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-cash' style={{fontSize:50, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Blockers 3월 기부내역 공지!</Text>
            
          </View>
           
        </View>
      <View style={styles.containerChallenge}>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-flame' style={{fontSize:30, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Challenge Dashboard</Text>
            
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>진행중인 챌린지가 없습니다</Text>
          <View style={{margin:15}}>
            <Text style={{fontSize:18,fontFamily:"arial",margin:10}}>챌린지 참여자는 평균적으로 80%의 금연 성공률과 20,000$의 리워드를 수령했습니다!</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
        {/* <TouchableOpacity onPress={this._goToChallenge.bind(this)}> */}
          <Button 
        title="참여하기"
        color="#77c6b8"
        onPress={()=>this.props.navigation.navigate("Details")}
        textStyle={{
          fontSize:40
        }}
        ></Button>
        {/* </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.containerCommunity}>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-bulb' style={{fontSize:30, paddingLeft:10}}/>
            <Text style={{fontSize:20,fontFamily:"arial",fontWeight:"bold",margin:10}}>Hot Post</Text>
      </View>
            <Table>
            <Row data={state.tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text}/>
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

export default HomeScreen;