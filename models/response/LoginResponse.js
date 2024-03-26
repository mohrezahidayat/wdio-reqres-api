class LoginResponse {
    resLoginSuccess = () => {
        return {
            "token": "QpwL5tke4Pnpja7X4"
        }
    }

    resLoginWithoutPassword = () => {
        return {
            "error": "Missing password"
        }
    }

    resLoginWithoutMail = () => {
        return {
            "error": "Missing email or username"
        }
    }

    resLoginNotFoundUser = () => {
        return {
            "error": "user not found"
        }
    }
}

module.exports = new LoginResponse