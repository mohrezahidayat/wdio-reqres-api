const supertest = require('supertest');

class LoginServices {
    constructor() {
        this.request = supertest(process.env.BASE_URL);
        this.path = '/api/login';
    }

    loginUser = (req) => {
        return this.request.post(this.path)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(req)
    }
}

module.exports = new LoginServices