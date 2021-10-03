import axiosClient from "./axiosClient";

export const getRequest = async (data) => {
  const URL = "/request";
  try {
    const res = await axiosClient.get(URL, { params: data });
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

export const getListHistoryRequest = async (data) => {
  const URL = "/history";
  try {
    const res = await axiosClient.get(URL, { params: { page: data } });
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

export const apiAddRequest = async (data) => {
  const URL = "/request/create";
  return axiosClient.post(URL, data);
};

export const getRequestById = async (id) => {
  const url = `/request/show/${id}`;
  const res = await axiosClient.get(url);
  return res.data;
};
export const apiUpdateRequest = (data) => {
  const res = axiosClient.put(`/request/edit/${data.id}`, data.dataForm);
  return res;
};
export const apiDeleteRequest = (id) => {
  return axiosClient.delete(`/request/delete/${id}`);
};
