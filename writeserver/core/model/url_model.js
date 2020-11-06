var collection = require('../database/database');

var model=function(){
    var create_hashed_url=async function(data){
        try{
            
            var url={
                hashed_url:data.hashed_url,
                original_url:data.original_url
            }
            var create_response =await new Promise((resolve,reject)=>{
                //var userdb = collection.userdb;
                //var c =collection.vv
                
                collection.url_collection().update({_id:url.hashed_url},url,{upsert:true}).then(out=>{
                    //console.log("aya2",url)
                    resolve(url.hashed_url);
                }).catch(err=>{
                    reject(err);
                });
            });
            return create_response;
        }
        catch(err){
            // console.log("error",err);
            throw err;
        };
        
    }
    return {
        create_hashed_url:function(data){
            return create_hashed_url(data);
        }
    }
}();

module.exports = model
