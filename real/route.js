var fs=require("fs");
var yewu=require("./route/beijing");
var index=require('./route/index');
var changsha=require('./route/changsha')
var kunming=require('./route/kunming')
var haerbin=require('./route/haerbin')
var xiangyang=require('./route/xiangyang')
var guangzhou=require('./route/guangzhou')
var xianggang=require('./route/xianggang')
var shanghai=require('./route/shanghai')
var hangzhou=require('./route/hangzhou')

module.exports.bind=function(server){
    server.on("request",function(req,res){
    if(req.url=="/html/beijing.html"){
        res.end(yewu.data);
    }else if(req.url=="/"){
        res.end(index.data)
    }else if(req.url=="/html/changsha.html"){
        res.end(changsha.data)
    }else if(req.url=="/html/kunming.html"){
        res.end(kunming.data)
    }else if(req.url=="/html/haerbin.html"){
        res.end(haerbin.data)
    }else if(req.url=="/html/xiangyang.html"){
        res.end(xiangyang.data)
    }else if(req.url=="/html/guangzhou.html"){
        res.end(guangzhou.data)
    }else if(req.url=="/html/xianggang.html"){
        res.end(xianggang.data)
    }else if(req.url=="/html/shanghai.html"){
        res.end(shanghai.data)
    }else if(req.url=="/html/hangzhou.html"){
        res.end(hangzhou.data)
    }
    else{
        fs.readFile("."+req.url,function(err,data){
            res.end(data);
        })
    }
})
}
