const supertest = require('supertest');

class UserServices {
    constructor() {
        this.request = supertest(process.env.BASE_URL);
        this.path = '/api/users';
    }

    getDetailsUser = (id) => {
        return this.request.get(`${this.path}/${id}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send()
    }

    getListUser = (params) => {
        return this.request.get(`${this.path}`)
        .query(params)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send()
    }

    createUser = (req) => {
        return this.request.post(this.path)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(req)
    }

    updateUser = (id,req) => {
        return this.request.put(`${this.path}/${id}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(req)
    }
}

module.exports = new UserServices