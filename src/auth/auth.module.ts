import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstant} from "./constants";
import {AuthGuard} from "./auth.guard";

@Module({
  imports:[UserModule,JwtModule.register({
    global:true,
    secret:jwtConstant.jwtSercret
  })],
  controllers: [AuthController],
  providers: [AuthService,AuthGuard],
  exports:[AuthService,AuthGuard],
})
export class AuthModule {}
