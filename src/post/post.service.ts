import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {Post, PostDocument} from "../schema/post.schema";
import {CreatePostDto} from "../postDto/createPostDto";
import {UpdatePostDto} from "../postDto/updatePostDto";



@Injectable()

export class PostService{

    constructor(@InjectModel(Post.name) private postModel:Model<PostDocument>) {}

    async  getPosts()
    {
        const posts = this.postModel.find()

        return posts;
    }
    async  findById(id:Number)
    {
        const post = this.postModel.findOne({id:id})

        return post;
    }
    async  getPostsOfUser(id:Number)

    {

        const postsOfUser = this.postModel.find({userId:id})


        return postsOfUser;
    }

    async  createPost(postDto: CreatePostDto )
    {
        const newPost = this.postModel.create(postDto);

        return newPost;
    }
    async  updatePost(postDto: UpdatePostDto)
    {
        const updatedPost = this.postModel.findOneAndUpdate({id:postDto.id},postDto);

        return updatedPost;
    }

}