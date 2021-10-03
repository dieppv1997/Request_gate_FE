import axiosClient from "./axiosClient";
export const apiGetComments = async (data) => {
  const res = await axiosClient.get(
    `/request/${data.id}/comments?page=${data.page}`
  );
  return res.data;
};
export const apiPostComment = (data) => {
  return axiosClient.post(
    `/request/${data.id}/comments/store?content=${data.content}`
  );
};
