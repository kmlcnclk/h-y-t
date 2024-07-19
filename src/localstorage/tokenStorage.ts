export function addTokenToLocalStorage(token: string) {
  localStorage.setItem("token", token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem("token");
}

export function deleteTokenFromLocalStorage() {
  localStorage.removeItem("token");
}
