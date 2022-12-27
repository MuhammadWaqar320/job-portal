import { BASE_URL } from "../utils/constant";
import { create, getById, getData, update } from "./httpService";
const createCompanyURL = `${BASE_URL}/company/create`;
export const registerCompanyIntoDb = (payload) => {
  return create(createCompanyURL, payload);
};
