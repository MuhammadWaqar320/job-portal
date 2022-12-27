import { BASE_URL } from "../utils/constant";
import { create, getById, getData, update } from "./httpService";
const createUserURL = `${BASE_URL}/user/create`;
export const registerUserIntoDb = (payload) => {
  return create(createUserURL, payload);
};
