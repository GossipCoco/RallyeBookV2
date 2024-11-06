import http from '../HTTP/http-common'

class UserService {
    getUserById(id){
        return http.get(`/User/GetUserById/${id}`)
    }
}
export default new UserService()