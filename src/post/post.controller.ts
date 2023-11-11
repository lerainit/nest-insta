import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {PostService} from "./post.service";
import {CreatePostDto} from "../postDto/createPostDto";
import {UpdatePostDto} from "../postDto/updatePostDto";



@Controller()

export class PostController{

    constructor(private postService :  PostService) {}

    @Get('/posts')
    async getPosts(){
        return   this.postService.getPosts();

    }
    @Get('/posts/:id')
    async findById(@Param('id',ParseIntPipe) id:Number ){
        return   this.postService.findById(id);

    }
    @Get('/posts/user/:id')
    async getPostsOfUser(@Param('id',ParseIntPipe) id:Number ){

        return   this.postService.getPostsOfUser(id);


    }


    @Post('/posts')
    async createPost(@Body() postDto:CreatePostDto){
        return   this.postService.createPost(postDto);

    }
    @Put('/posts')
    async updatePost(@Body() postDto:UpdatePostDto){
        return   this.postService.updatePost(postDto);

    }


}