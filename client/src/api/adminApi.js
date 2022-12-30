import { BASE_URL } from "../utils/constant";
import { create, getById, getAll, update } from "./httpService";
const GET_ALL_USER = `${BASE_URL}/user/getAll`;
const GET_ALL_COMPANY = `${BASE_URL}/company/getAll`;
const CHANGE_PASSWORD_ADMIN = `${BASE_URL}/admin/change/password`;
export const getAllUser = () => {
  return getAll(GET_ALL_USER);
};
export const getAllCompanies = () => {
  return getAll(GET_ALL_COMPANY);
};
export const changePasswordAdmin = (data, id) => {
  return update(`${CHANGE_PASSWORD_ADMIN}/${id}`, data);
};
