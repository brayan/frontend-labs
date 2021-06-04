class LoginRouter {

    async route(request: LoginHttpRequest) {
        if (request.body) {

        }
    }
}

export interface LoginHttpRequest {
    body: {
        password: string,
        email: string
    }
}

export interface LoginHttpResponse {
    statusCode: number
}

export default LoginRouter;