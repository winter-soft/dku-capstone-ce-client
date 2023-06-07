export const saveObjectToSessionStorage = (keyName, data) => {
  sessionStorage.setItem(keyName, JSON.stringify(data));
}

export const getObjectBySessionStorage = (keyName) => {
  return JSON.parse(sessionStorage.getItem(keyName));
}

export const saveItemToSessionStorage = (keyName, data) => {
  sessionStorage.setItem(keyName, data);
}

export const getItemBySessionStorage = (keyName) => {
  return sessionStorage.getItem(keyName);
}

export const saveUserToSession = (response) => {
  saveObjectToSessionStorage('user', {
    "email": response.data.user_email,
    "profileImageUrl": response.data.user_profileImageUrl,
    "nickName": response.data.user_nickName,
    "platformType": response.data.user_platformType,
    "role": response.data.user_role,
    "preference": response.data.user_preference,
  });
}