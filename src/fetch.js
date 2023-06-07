import axios from "axios";

const API_BASE_URL = 'https://jubujob.com/api/v1';

export const authenticate = (code) => {
  return axios.get(`${API_BASE_URL}/auth/kakao/callback?code=${code}`);
};

export const kakaoLoginPage = () => {
  return axios.get(`${API_BASE_URL}/auth/kakao/loginPage`)
}

export const registerStage1API = (body) => {
  return axios.post(`${API_BASE_URL}/auth/kakao/register/stage1`, body)
}

export const registerStage2API = (body) => {
  return axios.post(`${API_BASE_URL}/auth/kakao/register/stage2`, body)
}

export const registerStage3API = (body) => {
  return axios.post(`${API_BASE_URL}/auth/kakao/register/stage3`, body)
}

export const tokenValid = (token) => {
  return axios.get(`${API_BASE_URL}/auth/valid`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
};

export const jobPreferenceAPI = (token) => {
  return ApiMethodGET('/job/preference/', token);
}

export const announceListAPI = (token, type) => {
  return ApiMethodGET(`/announce/?type=${type}`, token);
}

export const announceAPI = (token, id) => {
  return ApiMethodGET(`/announce/${id}`, token);
}

export const ApiMethodGET = (url, token) => {
  return axios.get(`${API_BASE_URL}${url}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
}
