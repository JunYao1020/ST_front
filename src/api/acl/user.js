import request from '@/utils/request'

const api_name = '/rabbit/acl/acl-user'

export default {

    userDetails(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get',
        })
    },
    saveAclUser(aclUser) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: aclUser
        })
    },

    pageUser(userPage) {
        return request({
            url: `${api_name}/page`,
            method: 'get',
            params: userPage
        })
    },
    listUser() {
        return request({
            url: `${api_name}/list`,
            method: 'get'
        })
    },
    updateUser(user) {
        return request({
            url: `${api_name}`,
            method: 'put',
            data: user
        })
    },
    removeUser(userId) {
        return request({
            url: `${api_name}/${userId}`,
            method: 'delete'
        })
    },
    removeBatchUser(userIdList) {
        return request({
            url: `${api_name}`,
            method: 'delete',
            data: userIdList
        })
    },
    updateUserSelf(user) {
        return request({
            url: `${api_name}/self-info`,
            method: 'put',
            data: user
        })
    },
    updatePassword(password) {
        return request({
            url: `${api_name}/password`,
            method: 'put',
            data: password
        })
    },
    currentUserInfo() {
        return request({
            url: `${api_name}`,
            method: 'get'
        })
    }
}