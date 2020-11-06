var collection = require('../database/database');

var model=function(){
    var get_hashed_url=async function(url){
        try{
            
            var create_response =await new Promise((resolve,reject)=>{
                //var userdb = collection.userdb;
                //var c =collection.vv
                
                collection.url_collection().findOne({_id:url}).then(out=>{
                    //console.log("aya2",url)
                    if(out)
                    resolve(out.original_url);
                    else
                    resolve(out.original_url);
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
        get_hashed_url:function(data){
            return get_hashed_url(data);
        }
    }
}();

module.exports = model
