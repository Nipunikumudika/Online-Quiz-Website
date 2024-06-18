const mongoose = require("mongoose")

const mongodbURL = "mongodb+srv://nipunikumudika:nipunikumudika@cluster0.txmga7v.mongodb.net/Quizzania?retryWrites=true&w=majority"
mongoose.connect(mongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("Mongodb Connected!")
})

