import mongoose,{HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory,} from "@nestjs/mongoose";
import {User} from "./user.schema";
import {Comment} from "./coment.schema";


export type PostDocument = HydratedDocument<Post>


@Schema()

export class Post{

    @Prop({type:mongoose.Schema.Types.Mixed,ref:'User'})
    user: User
    @Prop()
    userId:Number
    @Prop()
    url: String
    @Prop()
    hasBackground: Boolean
    @Prop([{type:mongoose.Schema.Types.Mixed,ref:'Comment'}])
    comments: Comment[]
    @Prop([{type:mongoose.Schema.Types.Mixed,ref:'User'}])
    likes: User[]
    @Prop()
    fill:String

}

export const PostSchema = SchemaFactory.createForClass(Post)