var MongoClient = require("mongodb").MongoClient;
var connectionstring=require('../config/env_config').connectionstring;
var database=require('../config/env_config').database;
var get_db_collection =function(){
    var dbo={};
    MongoClient.connect(connectionstring,{ useUnifiedTopology: true },function(err,db){
        if (err) throw err;

        dbo =db.db(database);
        //console.log("aya 2",dbo)
    });

    return {
        url_collection:function(){
           return dbo.collection("URL_COLLECTION");
        }
    }
}();

module.exports=get_db_collection;
