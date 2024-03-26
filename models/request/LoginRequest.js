class LoginRequest {
    reqLoginSuccess = () => {
        return {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    }

    reqLoginWithoutPassword = () => {
        return {
            "email": "eve.holt@reqres.in",
            "password": ""
        }
    }

    reqLoginWithoutMail = () => {
        return {
            "email": "",
            "password": "cityslicka"
        }
    }

    reqLoginNotFoundUser = () => {
        return {
            "email": "aaa",
            "password": "aaa"
        }
    }
}

module.exports = new LoginRequest