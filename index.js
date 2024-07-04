const{MONGODB_URI}=require("./utils/config")
const app=require('./app');
//connect to the database
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI)
.then(()=>{console.log('connected to mongoDB...');
//start the server

app.listen(3002,()=>{
    console.log('server is running in the port 3002')
});

})
.catch(err=> console.log("could not connect to MangoDB..."))
