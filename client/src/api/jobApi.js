import { BASE_URL } from "../utils/constant";
import { create, getById, getAll, update, deleteData } from "./httpService";
const GET_ALL_JOBS = `${BASE_URL}/job/getAll`;
const GET_JOBS_BY_ID = `${BASE_URL}/job/getById`;
const GET_JOBS_BY_TITLE = `${BASE_URL}/job/search`;
const APPLY_FOR_JOB = `${BASE_URL}/application/create`;
const ALL_APPLICATION = `${BASE_URL}/application/getAll`;
const POST_JOB = `${BASE_URL}/job/create`;
const DELETE_JOB = `${BASE_URL}/job/delete`;
const CHANGE_PASSWORD = `${BASE_URL}/company/change/password`;
export const postJob = (payload) => {
  return create(POST_JOB, payload);
};
export const getAllJob = () => {
  return getAll(GET_ALL_JOBS);
};
export const getJobById = (id) => {
  return getById(`${GET_JOBS_BY_ID}/${id}`);
};
export const getJobByTitle = (title) => {
  return getById(`${GET_JOBS_BY_TITLE}/${title}`);
};
export const applyForJobIntoDb = (payload, email) => {
  return create(APPLY_FOR_JOB, payload);
};
export const allApplication = () => {
  return getAll(ALL_APPLICATION);
};
export const changePassword = (data, id) => {
  return update(`${CHANGE_PASSWORD}/${id}`, data);
};
export const deleteJob = (id) => {
  return deleteData(`${DELETE_JOB}/${id}`);
};
