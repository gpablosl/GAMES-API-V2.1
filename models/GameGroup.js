import mongoose from 'mongoose';

const {Schema} = mongoose;

const GameGroupSchema = new Schema({
    name: String
});

export default mongoose.model('GameGroup', GameGroupSchema);