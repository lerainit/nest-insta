"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_schema_1 = require("../schema/post.schema");
let PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async getPosts() {
        const posts = this.postModel.find();
        return posts;
    }
    async findById(id) {
        const post = this.postModel.findOne({ id: id });
        return post;
    }
    async getPostsOfUser(id) {
        const postsOfUser = this.postModel.find({ userId: id });
        return postsOfUser;
    }
    async createPost(postDto) {
        const newPost = this.postModel.create(postDto);
        return newPost;
    }
    async updatePost(postDto) {
        const updatedPost = this.postModel.findOneAndUpdate({ url: postDto.url }, postDto);
        return updatedPost;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
//# sourceMappingURL=post.service.js.map