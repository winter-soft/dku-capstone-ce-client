export const saveObjectToSessionStorage = (keyName, data) => {
  sessionStorage.setItem(keyName, JSON.stringify(data));
}

export const getObjectBySessionStorage = (keyName) => {
  return JSON.parse(sessionStorage.getItem(keyName));
}