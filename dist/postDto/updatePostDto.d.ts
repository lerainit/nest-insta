import { User } from "../schema/user.schema";
import { Comment } from "../schema/coment.schema";
export declare class UpdatePostDto {
    user: User;
    userId: Number;
    url: String;
    hasBackground: Boolean;
    comments: Comment[];
    likes: User[];
    fill: String;
}
