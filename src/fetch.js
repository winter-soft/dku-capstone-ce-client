import axios from "axios";

const API_BASE_URL = 'https://jubujob.com/api/v1';

export const authenticate = (code) => {
  return axios.get(`${API_BASE_URL}/auth/kakao/callback?code=${code}`);
};

export const kakaoLoginPage = () => {
  return axios.get(`${API_BASE_URL}/auth/kakao/loginPage`)
}

export const registerAPI = (body) => {
  return axios.post(`${API_BASE_URL}/auth/kakao/register/stage1`, body)
}

export const tokenValid = (token) => {
  return axios.get(`${API_BASE_URL}/auth/valid`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
};