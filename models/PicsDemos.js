import mongoose from 'mongoose';

const {Schema} = mongoose;

const picSchema = new Schema({
    picpath:String
});

export default mongoose.model('picsdemo', picSchema);