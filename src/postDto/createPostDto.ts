import {Prop} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {User} from "../schema/user.schema";

export class CreatePostDto{

 user: User

 userId: Number

 url: String

 hasBackground: Boolean

 comments: []

 likes: []

 fill:String

 }