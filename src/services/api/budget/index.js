import { axiosInternal, END_POINTS } from "..";

const budget_url = END_POINTS.budget;

export const getListBudgets = async () => {
  return await axiosInternal
    .get(budget_url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addBudget = async (data) => {
  return await axiosInternal
    .post(budget_url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editBudget = async (id, data) => {
  return await axiosInternal
    .put(budget_url + `/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBudget = async (id) => {
  return await axiosInternal
    .delete(budget_url + `/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
