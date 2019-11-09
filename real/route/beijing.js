var template=require("art-template");
template.defaults.root="./";
var db=require("../conn");
db.getscenic(function(data){
     module.exports.data=template("html/beijing.html",{data:data})
//      console.log(data[40].cid)
 })


