import axiosClient from "./axiosClient";

export const apiGetCat = async () => {
  const URL = "/category/list";
  const res = await axiosClient.get(URL);
  return res.data;
};
export const apiGetAssign = () => {
  return axiosClient.get("/category/assignee");
};

export const addCategory = async (data) => {
  const URL = "/category/store";
  try {
    const res = await axiosClient.post(URL, data);
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

export const updateCategory = async (data) => {
  const URL = `/category/update/${data.id}?name=${data.name}&user_id=${data.user_id}&status=${data.status}`;
  try {
    const res = await axiosClient.put(URL);
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
export const getListCategory = async () => {
  const URL = "/category/list";
  const res = await axiosClient.get(URL);
  return res;
};

export const getCategory = async (page, name) => {
  const URL = `/category`;
  try {
    const res = await axiosClient.get(URL, {
      params: {
        page,
        name,
      },
    });
    return {
      data: res.data.category,
      status: res.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const getAssignee = async () => {
  const URL = `/category/assignee`;
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
