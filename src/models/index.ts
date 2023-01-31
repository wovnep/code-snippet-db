import { Types } from 'mongoose';
export type UserModel = {
    id?: Types.ObjectId;
    github_id: String;
    name: String;
    email: String;
};
export type CodebaseModel = {
    id?: Types.ObjectId;
    title: String;
    code: String;
    language: String;
    user_id: Types.ObjectId;
    workspace_id: Types.ObjectId;
};
export type WorkspaceModel = {
    id?: Types.ObjectId;
    name: String;
    user_id: Types.ObjectId;
};
