const mongoose = require("mongoose")

const FineSchema = new mongoose.Schema({
    fine_dl:{
        type : Number,
        required : true
    },
    fine_rc :{
        type : Number,
        required : true
    },
    fine_total:{
        type : Number,
        required : true
    },
    fined_user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = mongoose.model("FineSchema",FineSchema);