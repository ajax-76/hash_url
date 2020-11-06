var apiinterface = function(api_service){
    return {
        create_hashed_url:function(url){
            return api_service.create_url(url)
        }
    }
}

module.exports = apiinterface;
