export function addEmailToLocalStorage(email: string) {
  localStorage.setItem("email", email);
}

export function getEmailFromLocalStorage() {
  return localStorage.getItem("email");
}

export function deleteEmailFromLocalStorage() {
  localStorage.removeItem("email");
}
