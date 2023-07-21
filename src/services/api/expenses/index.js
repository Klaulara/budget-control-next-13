import { axiosInternal, END_POINTS } from "..";

const expenses_url = END_POINTS.expenses;

export const getListExpenses = async () => {
  return await axiosInternal
    .get(expenses_url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getExpensesbyBudget = async (id) => {
  return await axiosInternal
    .get(expenses_url + `/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addExpenses = async (data) => {
  return await axiosInternal
    .post(expenses_url, data)
    .then((res) => {
      return res.data;
    }).catch((err)=>{
        console.log(err)
    })
};

export const editExpense = async(id, data) => {
    return await axiosInternal
    .put(expenses_url+`/${id}`, data)
    .then((res)=> {
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
}

export const deteleExpense = async(id) => {
    return await axiosInternal.delete(expenses_url+`/${id}`)
    .then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
}