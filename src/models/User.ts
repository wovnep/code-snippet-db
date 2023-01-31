import mongoose, { Schema } from 'mongoose';
const schema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    github_id: { type: String, required: true, unique: true },
});
export const User = mongoose.model('User', schema);
