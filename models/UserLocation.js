import mongoose from "mongoose";

const userLocation = mongoose.Schema({
    userName : {
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
    bloodGroup : {
        type : String,
        required : true
    }
}, {timestamps : true});


export default mongoose.model('userLocation', userLocation, 'userLocations');