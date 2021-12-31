const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
     username : { type : String , reuired : true },
     description : { type : String , reuired : true },
     duration : { type : Number , reuired : true },
     date : { type : Date , reuired : true },
},{
    timestamp : true
})