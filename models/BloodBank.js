import mongoose, { mongo } from "mongoose";


const bloodBank = mongoose.Schema({

    name : {
        type : String,
        required : true
    }, 
    lat : {
        type : mongoose.Types.Decimal128,
        required : true
    },
    lon : {
        type : mongoose.Types.Decimal128,
        required : true
    },
    mobile : {
        type : Number,
        required : true,
    },
    bloods : {
        type : mongoose.Types.Map,
        required : true
    }
},{timestamps : true});

export default mongoose.model('bloodBank',bloodBank, 'bloodbanks');