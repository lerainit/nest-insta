import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {PostController} from "./post.controller";
import {PostService} from "./post.service";
import {Post, PostSchema} from "../schema/post.schema";
import {User, UserSchema} from "../schema/user.schema";

@Module({
    imports:[MongooseModule.forFeature([{name:Post.name,schema:PostSchema},{name:User.name,schema:UserSchema}])],
    controllers:[PostController],
    providers:[PostService]

})

export class PostModule {}