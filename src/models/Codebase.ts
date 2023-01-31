import mongoose, { Schema } from 'mongoose';
const schema = new Schema({
    title: { type: String, maxlength: 100, required: true },
    code: { type: String, required: true },
    language: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    workspace_id: { type: Schema.Types.ObjectId, ref: 'Workspace', required: true },
});
export const Codebase = mongoose.model('Codebase', schema);
