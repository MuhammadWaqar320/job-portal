export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};
export const logOut = () => {
  localStorage.clear();
};
