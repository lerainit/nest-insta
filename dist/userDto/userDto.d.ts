export declare class UserDto {
    id: Number;
    name: String;
    nickName: String;
    password: String;
    url: String;
    subscribers: [UserDto];
    info: String;
    isAuth: Boolean;
    isFollower: Boolean;
}
