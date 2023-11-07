import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.module";
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";
import {PostModule} from "./post/post.module";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [ConfigModule.forRoot({
     envFilePath:['.env','.env.development'],
     isGlobal:true,
      cache:true
  }),
      MongooseModule.forRoot('mongodb+srv://admin:lera1989@cluster0.uox40k6.mongodb.net/nest-insta?retryWrites=true&w=majority') ,
      UserModule,PostModule,AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
