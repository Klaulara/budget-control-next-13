"use server";

import { redirect } from "next/navigation";

import { addExpenses } from "@/services/api/expenses";

export const onSubmit = async (data) => {
  const name = data.get("name");
  const value = data.get("value");
  const budget_id = data.get("budget_id");
  const category_id = data.get("category");
  const object = { name, value, budget_id, category_id };
  const response = await addExpenses(object);
  if (response.status === 201) {
    redirect(`/budgets/${budget_id}`);
  } else {
    console.log("Error");
  }
};
