import axios from 'axios';
import { apiUrl } from '../../config';


export const registerUser = ({ username, email, password }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/auth/local/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        resolve(response.data.user);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
        reject(error.response);
      });
  });
};

export const loginUser = ({ identifier, password }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/auth/local`, {
        identifier: identifier,
        password: password,
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        resolve(response.data.user);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
        reject(error.response);
      });
  });
};
