import { getFetcher } from "./fetcher.js";

export const getUserInfo = async (id) => {
  const URL = `http://localhost:3000/user/${id}`;
  return await getFetcher(URL);
};

export const getUserActivity = async (id) => {
  const URL = `http://localhost:3000/user/${id}/activity`;
  return await getFetcher(URL);
};

export const getUserAverageSessions = async (id) => {
  const URL = `http://localhost:3000/user/${id}/average-sessions`;
  return await getFetcher(URL);
};

export const getUserPerformance = async (id) => {
  const URL = `http://localhost:3000/user/${id}/performance`;
  return await getFetcher(URL);
};
