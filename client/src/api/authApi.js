import { BASE_URL } from "../utils/constant";
import { create, get, getById, update } from "./httpService";
const LOGIN_URL = `${BASE_URL}/user/login`;
export const LoginApi = async (payload) => {
  const responseData = await create(LOGIN_URL, payload);
  if (responseData.success) {
    localStorage.setItem("token", responseData.data.token);
    localStorage.setItem("id", responseData.data.userInfo.id);
    localStorage.setItem("role", responseData.data.userInfo.role);
    localStorage.setItem("email", responseData.data.userInfo.email);
    localStorage.setItem("name", responseData.data.userInfo.name);
  }
  return responseData;
};
