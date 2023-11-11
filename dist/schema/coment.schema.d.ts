import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment {
    author: User;
    text: String;
    isVisible: Boolean;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, mongoose.Document<unknown, any, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Comment>> & mongoose.FlatRecord<Comment> & {
    _id: mongoose.Types.ObjectId;
}>;
