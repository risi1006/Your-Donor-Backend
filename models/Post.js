import mongoose from "mongoose";

const postschema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required : true
    },
    created_by : {
        type : String,
        required : true
    }
}, {timestamps : true});

export default mongoose.model('Post', postschema, 'post');