export const saveObjectToSessionStorage = (keyName, data) => {
  sessionStorage.setItem(keyName, JSON.stringify(data));
}

export const getObjectBySessionStorage = (keyName) => {
  return JSON.parse(sessionStorage.getItem(keyName));
}

export const saveItemToSessionStorage = (keyName, data) => {
  sessionStorage.setItem(keyName, data);
}