var urlconvertfunctions =function(url_model){
    
    this.get_url = async function(url){
        try{
            return await url_model.get_hashed_url(url);
        }
       catch(err){
           throw err;
       }
    }
};

module.exports = urlconvertfunctions;
