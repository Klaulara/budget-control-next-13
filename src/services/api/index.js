import axios from "axios";

export const axiosInternal = axios.create({
    baseURL: process.env.DEV,
});

export const END_POINTS = {
    budget: "/budget",
    category: "/category",
    expenses: "/expenses"
};