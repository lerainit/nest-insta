import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../userDto/createUserDto";

@Injectable()
export class AuthService {
    constructor(private userService:UserService, private jwtService: JwtService) {
    }
    async signIn(name:String,password:String){
        const user = await  this.userService.findOne(name);
        if(user?.password !== password){
        throw new UnauthorizedException();
        }
        const payload = {name:user.name,sub:user.id}

        const tokenAccess = await this.jwtService.signAsync(payload,{expiresIn:"30m"})
        return {token: tokenAccess}
    }
    async  createUser(userDto: CreateUserDto)
    {
        const newUser = this.userService.createUser(userDto);

        return newUser;
    }
}
