import {Body, Controller, HttpCode, HttpStatus, Post,Put} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {SignInDto} from "./dto/auth.dto";
import {CreateUserDto} from "../userDto/createUserDto";
import {UpdateUserDto} from "../userDto/updateUserDto";
import {User, UserDocument} from "../schema/user.schema";

@Controller('auth')
export class AuthController {

    constructor( private authService:AuthService) {}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    sigIn(@Body() signInDto:SignInDto ){
      return   this.authService.signIn(signInDto.name,signInDto.password);

    }
    @Put('logout')
        logOut(@Body() user:User ){
          return   this.authService.logout(user);

        }

    @Post('register')

    async createUser(@Body() userDto:CreateUserDto){
        return   this.authService.createUser(userDto)


    }
}
