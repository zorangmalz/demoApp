pragma solidity ^0.5.6;

contract ChallengeContract{
   
    mapping (address=>uint) check;
    
    struct data {
        uint name;
        bool status;
    }
    data[] public datas;
    
    function set(bool _status) public {
        datas.length++;
        datas[datas.length-1].name = check[msg.sender];
        datas[datas.length-1].status=_status;
        check[msg.sender]=datas.length-1;

    }
    function confirm(uint passFail) public returns(bool){
        if (passFail==0){
            datas[check[msg.sender]].status=true;
            return datas[check[msg.sender]].status;
        } else {
            datas[check[msg.sender]].status=false;
            return datas[check[msg.sender]].status;
        }
    }
    function getByName()public view returns (bool){
        return (datas[check[msg.sender]].status);

    }
    
}