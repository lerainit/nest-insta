import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(name: String, password: String): Promise<{
        token: string;
    }>;
}