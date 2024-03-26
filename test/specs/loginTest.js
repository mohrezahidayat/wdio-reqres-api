const LoginServices = require('../../services/LoginServices')
const LoginResponse = require('../../models/response/LoginResponse')
const LoginRequest = require('../../models/request/LoginRequest')
const status = require('http-status')

describe('Login Cases', () => {
    it('Login With Valid Credentials', async() => {
        const request = LoginRequest.reqLoginSuccess()
        const response = await LoginServices.loginUser(request)
        const expectedResponse = LoginResponse.resLoginSuccess()

        await expect(response.status).toBe(status.OK)
        await expect(response.body).toStrictEqual(expectedResponse)
    })

    it('Login Without Password', async() => {
        const request = LoginRequest.reqLoginWithoutPassword()
        const response = await LoginServices.loginUser(request)
        const expectedResponse = LoginResponse.resLoginWithoutPassword()

        await expect(response.status).toBe(status.BAD_REQUEST)
        await expect(response.body).toStrictEqual(expectedResponse)
    })

    it('Login Without Mail', async() => {
        const request = LoginRequest.reqLoginWithoutMail()
        const response = await LoginServices.loginUser(request)
        const expectedResponse = LoginResponse.resLoginWithoutMail()

        await expect(response.status).toBe(status.BAD_REQUEST)
        await expect(response.body).toStrictEqual(expectedResponse)
    })

    it('Login Not Found User', async() => {
        const request = LoginRequest.reqLoginNotFoundUser()
        const response = await LoginServices.loginUser(request)
        const expectedResponse = LoginResponse.resLoginNotFoundUser()

        await expect(response.status).toBe(status.BAD_REQUEST)
        await expect(response.body).toStrictEqual(expectedResponse)
    })
})