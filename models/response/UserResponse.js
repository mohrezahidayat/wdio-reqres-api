class UserResponse {
    respGetDetailsUser = () => {
        return {
            "data": {
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            },
            "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        }
    }

    respGetListUser = () => {
        return {
            "page": 1,
            "per_page": 2,
            "total": 12,
            "total_pages": 6,
            "data": [
                {
                    "id": 1,
                    "email": "george.bluth@reqres.in",
                    "first_name": "George",
                    "last_name": "Bluth",
                    "avatar": "https://reqres.in/img/faces/1-image.jpg"
                },
                {
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                }
            ],
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        }
    }

    respCreateUser = (idCreated,timeCreated) => {
        return {
            "name": "morpheus",
            "job": "leader",
            "id": idCreated,
            "createdAt": timeCreated
        }
    }

    resUpdateUser = (timeUpdated) => {
        return {
            "name": "alexandria",
            "job": "staff",
            "updatedAt": timeUpdated
        }
    }
}

module.exports = new UserResponse