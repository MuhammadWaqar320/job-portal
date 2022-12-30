import { BASE_URL } from "../utils/constant";
import { create, getById, deleteData,getData, update } from "./httpService";
const createUserURL = `${BASE_URL}/user/create`;
const DELETE_User = `${BASE_URL}/user/delete`;

export const registerUserIntoDb = (payload) => {
  return create(createUserURL, payload);
};
export const deleteUser = (id) => {
  return deleteData(`${DELETE_User}/${id}`);
};