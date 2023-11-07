import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {SignInDto} from "./dto/auth.dto";

@Controller('auth')
export class AuthController {

    constructor( private authService:AuthService) {}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    sigIn(@Body() signInDto:SignInDto ){
      return   this.authService.signIn(signInDto.name,signInDto.password);

    }

}