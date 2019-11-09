var mysql=require("mysql");
var conn=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"travel"
});

//  module.exports.getdata=function(call1){
// conn.connect(function(err){
//   if(err) console.log('数据库建立连接失败。');
//   else{
//       console.log('数据库建立连接成功。');
//       conn.query({sql:'select db_scenicinfo.*,db_city.* from db_scenicinfo inner join db_city on db_scenicinfo.cid=db_city.id',nestTables:'_'},function(err,data1){      
//       var sql1="select * from db_city";
//          conn.query(sql1,function(err,data){
//            if(err) console.log('查询数据失败。')
//             //  console.log(data1);
//             call1(data,data1);
//          })
     
// })
//   }
// })
//  }


//index.html
module.exports.getdata=function(calls){
  var sql="select * from db_scenicinfo";
  conn.query(sql,function(err,data){
      calls(data);
  })
}
//城市详情页
// module.exports.getscenic=function(calls){
//   var sql="select * from db_scenic ";
//   conn.query(sql,function(err,data){
//       calls(data);
//   })
// }
      module.exports.getscenic=function(calls){
          conn.query({sql:'select db_city.id,db_city.city,db_city.cityinfo,db_city.mapimg,db_city.tip,db_city.stationimg,db_city.infoarea,db_city.infobuild,db_city.infofood,db_city.infohistory,db_city.infolocation,db_city.infomannum,db_city.infoscenic,db_city.infoschool,db_city.infostation,db_scenic.id,db_scenic.scenicimg,db_scenic.scenicinfo,db_scenic.scenicname,db_scenic.cid from db_city inner join db_scenic on db_city.id=db_scenic.cid',nestTables:true},function(err,data){
          if(err) console.log('查询数据失败。');
          else{
            calls(data)
          }
      });
  }






