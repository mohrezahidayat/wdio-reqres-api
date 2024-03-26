const UserServices = require('../../services/UserServices')
const UserResponse = require('../../models/response/UserResponse')
const UserRequest = require('../../models/request/UserRequest')
const status = require('http-status')

const ID_USER = '1'
const ID_NOT_FOUND = '99999'

describe('User Cases', () => {
    it('Get Details User', async() => {
        const response = await UserServices.getDetailsUser(ID_USER)
        const expectedResponse = UserResponse.respGetDetailsUser(ID_USER)

        await expect(response.status).toBe(status.OK)
        await expect(response.body).toStrictEqual(expectedResponse)
    })

    it('Get Details User Not Found', async() => {
        const response = await UserServices.getDetailsUser(ID_NOT_FOUND)

        await expect(response.status).toBe(status.NOT_FOUND)
    })

    it('Get List Users', async() => {
        const params = {
            page: 1,
            per_page: 2
        }
        const response = await UserServices.getListUser(params)
        const expectedResponse = await UserResponse.respGetListUser()

        await expect(response.status).toBe(status.OK)
        await expect(response.body).toStrictEqual(expectedResponse)
    })

    it('Create New User', async() => {
        const request = UserRequest.reqCreateUser()
        const response = await UserServices.createUser(request)
        const expectedResponse = UserResponse.respCreateUser(expect.anything(),expect.anything())

        await expect(response.status).toBe(status.CREATED)
        await expect(response.body).toStrictEqual(expectedResponse)
    })

    it('Update User Exist', async() => {
        const request = UserRequest.reqUpdateUser();
        const response = await UserServices.updateUser(ID_USER,request)
        const expectedResponse = UserResponse.resUpdateUser(expect.anything())

        await expect(response.status).toBe(status.OK)
        await expect(response.body).toStrictEqual(expectedResponse)
    })
})
