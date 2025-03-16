import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    album: {type:String, required: true},
    image: {type: String, required:true},
    file: {type:String, required: true}, //music url
    duration: {type:String,required: true}
})

const songModel= mongoose.models.song || mongoose.model("song",songSchema); //if song model exist then use it otherwise create song model
export default songModel;