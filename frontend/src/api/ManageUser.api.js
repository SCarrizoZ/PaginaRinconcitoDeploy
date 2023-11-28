import axios from 'axios';
import { apiUrl } from '../../config';

export const registerUser = ({ username, email, password }) => {
  axios
    .post(`${apiUrl}/auth/local/register`, {
      username: username,
      email: email,
      password: password,
    })
    .then(response => {
      console.log('User profile', response.data.user)
      console.log('User token', response.data.jwt)
      localStorage.setItem("token", response.data.jwt)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      window.location.reload()
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
    });
}

export const loginUser = ({ identifier, password }) => {
  axios
    .post(`${apiUrl}/auth/local`, {
      identifier: identifier,
      password: password,
    })
    .then(response => {
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      localStorage.setItem("token", response.data.jwt)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      window.location.reload()
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
    });
}