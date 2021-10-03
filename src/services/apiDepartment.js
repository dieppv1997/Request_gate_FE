import axiosClient from "./axiosClient";

export const getDepartment = async () => {
  const URL = "getDepartment";
  try {
    const res = await axiosClient.get(URL);
    return {
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
export const apiGetDepartment = async (page) => {
  const res = await axiosClient.get(`/department?page=${page}`);
  return res;
};
export const apiFilterDepartment = async (query) => {
  return await axiosClient.get(`/department?name=${query}`);
};

export const apiCreateDepartment = async (data) => {
  const res = await axiosClient.post("/department/store", data);
  return res;
};
export const apiUpdateDepartment = async (data) => {
  const res = await axiosClient.put(`/department/update/${data.id}`, data);
  return res;
};
