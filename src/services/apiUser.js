import axiosClient from "./axiosClient";

export const login = async (data) => {
  const URL = "/auth/login";
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

export const loginGoogle = async (data) => {
  const URL = "auth/loginGoogle";
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

export const registerByGoogle = async (data) => {
  const URL = "/auth/signUpByGSuit";
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

export const getMe = async (data) => {
  const URL = "/users/me";
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

export const filterUser = async (data) => {
  const URL = "/users";
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

export const addUser = async (data) => {
  const URL = "/users/store";
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

export const updateUser = async (data) => {
  const URL = `/users/update/${data.id}?name=${data.name}&employee_id=${data.employee_id}&email=${data.email}&department_id=${data.department_id}&role_id=${data.role_id}&status=${data.status}&id=${data.id}`;
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

export const changePassword = async (data) => {
  const URL = "/auth/reset";
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
