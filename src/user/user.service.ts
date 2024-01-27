import {Injectable, ParseIntPipe} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../schema/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "../userDto/createUserDto";
import {UpdateUserDto} from "../userDto/updateUserDto";
import {UserDto} from "../userDto/userDto";


@Injectable()

export class UserService{

constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {}

    async  getUsers()
    {
        const users = this.userModel.find()

        return users;
    }
    async  findById(id:Number)
    {
        const user = this.userModel.findOne({id:id})

        return user;
    }
    async  findOne(name:String)
    {
        const user = this.userModel.findOne({name:name})

        return user;
    }
    async  findByNick(nickName:String)
    {
        const user = this.userModel.findOne({nickName:nickName})

        return user;
    }

    async  createUser(userDto: CreateUserDto)
    {
        const newUser = this.userModel.create(userDto);

        return newUser;
    }
    async  updateUser(userDto: UpdateUserDto)
    {
        const updatedUser = this.userModel.findOneAndUpdate({id:userDto.id},userDto);

        return updatedUser;
    }
async  authUser(user: User)
    {
        const updatedUser = this.userModel.findOneAndUpdate({id:user.id},user);

        return updatedUser;
    }

}