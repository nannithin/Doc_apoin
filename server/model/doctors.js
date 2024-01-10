import mongoose from "mongoose";
import { Schema } from "mongoose";

const DoctorSchema = new Schema({
    name :{
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    profession: {
        type: String,
        required: true
    },
    about :{
        type: String,
        required: true,
    },
    education :{
        type: String,
        required: true,
    },
    tokenPrice : {
        type: String,
        required: true,
    }
},{timestamps: true});

export default mongoose.model("Doctor",DoctorSchema);