var apiinterface = function(api_service){
    return {
        get_hashed_url:function(url){
            console.log(url)
            return api_service.get_url(url)
        }
    }
}

module.exports = apiinterface;
