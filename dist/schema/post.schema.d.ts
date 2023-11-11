import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";
import { Comment } from "./coment.schema";
export type PostDocument = HydratedDocument<Post>;
export declare class Post {
    user: User;
    userId: Number;
    url: String;
    hasBackground: Boolean;
    comments: Comment[];
    likes: User[];
    fill: String;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, mongoose.Document<unknown, any, Post> & Post & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Post, mongoose.Document<unknown, {}, mongoose.FlatRecord<Post>> & mongoose.FlatRecord<Post> & {
    _id: mongoose.Types.ObjectId;
}>;
