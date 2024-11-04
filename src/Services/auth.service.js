import axios from 'axios';
import conf from "../../server"
import api from "./api";
import TokenService from "./token.service";
const API_URL = conf.Url

class AuthService {
  login(user) {
    return api
      .post(API_URL + '/user/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.isSuccess) {
            user.user = response.data
            localStorage.setItem('user', JSON.stringify(user.user))
            if (response.data.tocken) {
                TokenService.setUser(response.data);
              }
              return user.user;
        }
        else {
            this.logout
        }
        //console.log(response.data.ob)
        return response.data.ob
    })
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();