const TOKEN = "@@token";
export const setToken = (token: string) => localStorage.setItem(TOKEN, token);
export const getToken = () => localStorage.getItem(TOKEN);
export const deleteToken = () => localStorage.deleteItem(TOKEN);
