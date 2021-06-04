import LoginRouter from "./LoginRouter";

describe('Login Router', () => {

    test('should return 400 if no email is provided', () => {
        const loginRouter = new LoginRouter();
        const httpRequest = {
            body: {
                password: 'any_password',
                email: ''
            }
        };

        const httpResponse = loginRouter.route(httpRequest);

        expect(httpResponse.statusCode).toBe(400);
    });

});