require('dotenv').config();
const express =require('express');
const cors =require('cors');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const app =express();
const port = require('./core/config/env_config').port;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());

const url_model = require('./core/model/url_model');
const url_service = require('./core/service/service_short_url');
const _get_url = require('./interface/hased_url')(new url_service(url_model))


// write server


app.get('/:url',async (req,res)=>{
    
    const url = req.params.url
    if (url==undefined || url =="")
    return res.status(400);
    
    // shorten url : 
    try{
        const result_url = await _get_url.get_hashed_url(url);
        return res.redirect(result_url);
    }
    catch(err){
        return res.status(500);
    }    
});

app.listen(port,()=>{
    console.log(`serving at port : ${port}, database ${require('./core/config/env_config').connectionstring}`)
});
