var template=require("art-template");
template.defaults.root="./";
var db=require("../conn");
db.getscenic(function(data){
      module.exports.data=template("html/xianggang.html",{data:data})
 })


