import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        if (username.equals("admin") && password.equals("uy6837jhhdf")) {
            return "OK"; // Return a response with a status of "OK" if credentials are correct
        } else {
            throw new UnauthorizedException(); // Throw an exception if credentials are incorrect
        }
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public class UnauthorizedException extends RuntimeException {
        public UnauthorizedException() {
            super("Unauthorized");
        }
    }

}
