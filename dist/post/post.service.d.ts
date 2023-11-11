/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from "mongoose";
import { Post, PostDocument } from "../schema/post.schema";
import { CreatePostDto } from "../postDto/createPostDto";
import { UpdatePostDto } from "../postDto/updatePostDto";
export declare class PostService {
    private postModel;
    constructor(postModel: Model<PostDocument>);
    getPosts(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    findById(id: Number): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
    getPostsOfUser(id: Number): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    createPost(postDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updatePost(postDto: UpdatePostDto): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Post> & Post & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
}
