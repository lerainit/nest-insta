import {User} from "../schema/user.schema";


export  class UpdateUserDto{
    id: Number
    name: String

    nickName: String

    password: String

    url: String

    subscribers: [User]

    info: String

    isAuth: Boolean

    isFollower: Boolean
}