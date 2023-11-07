import mongoose,{HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


export type UserDocument = HydratedDocument<User>

 @Schema()

 export class User{
  @Prop()
  id: Number
  @Prop()
  name: String
  @Prop()
  nickName: String
  @Prop()
  password: String
  @Prop()
  url: String
  @Prop([{type:mongoose.Schema.Types.Mixed,ref:'User'}])
  subscribers: User[]
  @Prop()
  info: String
  @Prop()
  isAuth: Boolean
  @Prop()
  isFollower: Boolean
 }

 export const UserSchema = SchemaFactory.createForClass(User)
