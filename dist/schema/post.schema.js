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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.default.Schema.Types.Mixed, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Post.prototype, "user", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Number)
], Post.prototype, "userId", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Post.prototype, "url", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Boolean)
], Post.prototype, "hasBackground", void 0);
__decorate([
    (0, mongoose_2.Prop)([{ type: mongoose_1.default.Schema.Types.Mixed, ref: 'Comment' }]),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    (0, mongoose_2.Prop)([{ type: mongoose_1.default.Schema.Types.Mixed, ref: 'User' }]),
    __metadata("design:type", Array)
], Post.prototype, "likes", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Post.prototype, "fill", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_2.Schema)()
], Post);
exports.PostSchema = mongoose_2.SchemaFactory.createForClass(Post);
//# sourceMappingURL=post.schema.js.map