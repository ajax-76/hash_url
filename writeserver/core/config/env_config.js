module.exports={
    connectionstring:process.env.MONGO_URL,
    database:process.env.MONGO_DATABASE,
    port:process.env.SERVER_PORT,
    read_url:process.env.READ_URL
};
