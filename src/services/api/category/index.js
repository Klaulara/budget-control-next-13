import { axiosInternal, END_POINTS } from "..";

const category_url = END_POINTS.category;

export const getListCategories = async () => {
  return await axiosInternal
    .get(category_url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCategory = async (data) => {
  return await axiosInternal
    .post(category_url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editCategory = async (id, data) => {
  return await axiosInternal
    .put(category_url + `/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCategory = async (id) => {
  return await axiosInternal
    .delete(category_url + `/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
