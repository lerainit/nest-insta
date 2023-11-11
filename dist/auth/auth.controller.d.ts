import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/auth.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    sigIn(signInDto: SignInDto): Promise<{
        token: string;
    }>;
}
