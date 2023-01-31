import mongoose, { Schema } from 'mongoose';
const schema = new Schema({
    name: { type: String, maxlength: 50, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const Workspace = mongoose.model('Workspace', schema);
