class UserRequest {
    reqCreateUser = () => {
        return {
            "name": "morpheus",
            "job": "leader"
        }
    }

    reqUpdateUser = () => {
        return {
            "name": "alexandria",
            "job": "staff"
        }
    }
}

module.exports = new UserRequest