const sha256 = require('sha256');
const read_url = require('../config/env_config').read_url;
var urlconvertfunctions =function(url_model){
    
    this.create_url = async function(url){
        try{
            const hashedurl = await url_model.create_hashed_url({
                hashed_url:sha256(url),
                original_url:url
            })
            return `${read_url}/${hashedurl}`;
        }
       catch(err){
           throw err;
       }
    }
};

module.exports = urlconvertfunctions;
