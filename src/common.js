export const saveItem = (key, value) => {
  return sessionStorage.setItem(key, value);
}
export const getItemByKey = (key) => {
  return sessionStorage.getItem(key);
}

export const removeItemByKey = (keyName) => {
  sessionStorage.removeItem(keyName);
}

export const removeAllSession = () => {
  sessionStorage.clear()
}

export const saveUserToSession = (response) => {
  saveItem("email", response.data.user_email);
  saveItem("profileImageUrl", response.data.user_profileImageUrl);
  saveItem("nickName", response.data.user_nickName);
  saveItem("platformType", response.data.user_platformType);
  saveItem("role", response.data.user_role);
  saveItem("preference", response.data.user_preference);
}

export const saveRegisterInfoToSession = (data) => {
  saveItem("email", data.email);
  saveItem("profileImageUrl", data.profileImageUrl);
  saveItem("nickName", data.nickName);
  saveItem("platformId", data.platformId);
  saveItem("platformType", data.platformType);
  saveItem("role", data.role);
  saveItem("registerStage", data.registerStage);
}