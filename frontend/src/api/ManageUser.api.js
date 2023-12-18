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
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        resolve(response.data.user);
      })
      .catch(error => {
        console.log('Ocurrió un error:', error.response);
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
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        resolve(response.data.user);
      })
      .catch(error => {
        console.log('Ocurrió un error:', error.response);
        reject(error.response);
      });
  });
};

export const changePassword = ({ oldPassword, newPassword, confirmPassword }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/auth/change-password`, {
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirmation: confirmPassword,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      .then(response => {
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        resolve(response.data.user);
      })
      .catch(error => {
        console.log('Ocurrió un error:', error.response);
        reject(error.response);
      });
  });
}