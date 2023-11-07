import {Prop} from "@nestjs/mongoose";

export class CreateUserDto{

    id: Number
    name: String

    nickName: String

    password: String

    url: String

    subscribers: []

    info: String

    isAuth: Boolean

    isFollower: Boolean

}