import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "../userDto/createUserDto";
import {UpdateUserDto} from "../userDto/updateUserDto";
import {UserDto} from "../userDto/userDto";
import {AuthGuard} from "../auth/auth.guard";


@Controller()

export class UserController{

    constructor(private userService :  UserService) {}

    @Get('/users')
    @UseGuards(AuthGuard)
    async getUsers(){
        return   this.userService.getUsers();


    }
    @Get('/users/:id')
    @UseGuards(AuthGuard)
    async findById(@Param('id',ParseIntPipe) id:Number ){
        return   this.userService.findById(id);

    }
    @Get('/users/nick/:nickName')
    @UseGuards(AuthGuard)
    async findByNick(@Param('nickName') nickName:String ){
        return   this.userService.findByNick(nickName);

    }
    @Post('/users')

    async createUser(@Body() userDto:CreateUserDto){
     return   this.userService.createUser(userDto)


    }
    @Put('/users')
    @UseGuards(AuthGuard)
    async updateUser(@Body() userDto:UpdateUserDto){
        return   this.userService.updateUser(userDto);


    }


}