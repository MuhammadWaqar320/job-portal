import { BASE_URL } from "../utils/constant";
import { create, getById, getAll, update } from "./httpService";
const GET_ALL_JOBS = `${BASE_URL}/job/getAll`;
const GET_JOBS_BY_ID = `${BASE_URL}/job/getById`;

export const getAllJob = () => {
  return getAll(GET_ALL_JOBS);
};
export const getJobById = (id) => {
  return getById(`${GET_JOBS_BY_ID}/${id}`);
};
