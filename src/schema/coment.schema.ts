import mongoose,{HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory,} from "@nestjs/mongoose";
import {User} from "./user.schema";


export type CommentDocument = HydratedDocument<Comment>


@Schema()

export class Comment{
    @Prop({type:mongoose.Schema.Types.Mixed,ref:'User'})
    author:User
    @Prop()
    text:String
    @Prop()
    isVisible: Boolean

}

export const CommentSchema = SchemaFactory.createForClass(Comment)