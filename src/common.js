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

export const saveValidInfoToSession = (data) => {
  saveItem("email", data.user_email);
  saveItem("profileImageUrl", data.user_profileImageUrl);
  saveItem("nickName", data.user_nickName);
  saveItem("platformType", data.user_platformType);
  saveItem("role", data.user_role);
  saveItem("preference", data.user_preference);
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