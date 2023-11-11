import { User } from "../schema/user.schema";
export declare class CreatePostDto {
    user: User;
    userId: Number;
    url: String;
    hasBackground: Boolean;
    comments: [];
    likes: [];
    fill: String;
}
