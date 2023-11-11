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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const createPostDto_1 = require("../postDto/createPostDto");
const updatePostDto_1 = require("../postDto/updatePostDto");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getPosts() {
        return this.postService.getPosts();
    }
    async findById(id) {
        return this.postService.findById(id);
    }
    async getPostsOfUser(id) {
        return this.postService.getPostsOfUser(id);
    }
    async createPost(postDto) {
        return this.postService.createPost(postDto);
    }
    async updatePost(postDto) {
        return this.postService.updatePost(postDto);
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)('/posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Get)('/posts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/posts/user/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostsOfUser", null);
__decorate([
    (0, common_1.Post)('/posts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPostDto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)('/posts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatePostDto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map