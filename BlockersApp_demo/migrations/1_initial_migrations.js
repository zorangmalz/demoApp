const Migrations =artifacts.require("BlockersDemoApp/contracts/Migrations.sol")

module.exports=function(deployer){
    deployer.deploy(Migrations)
}