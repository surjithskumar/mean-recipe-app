const mongoose = require('mongoose')

const connectionString = process.env.connectionString

mongoose.connect(connectionString).then((res)=>{
    console.log('Database conected successfully');
}).catch(err=>{
    console.log(err,'MongoDb connection failed')
})