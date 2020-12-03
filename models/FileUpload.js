import mongoose from 'mongoose';

const {Schema} = mongoose;

const FileUploadSchema = new Schema({
    name: String,
    path: String
});

export default mongoose.model('FileUpload', FileUploadSchema);