"use server";

import { redirect } from 'next/navigation';

import { addBudget } from "@/services/api/budget";

export const onSubmit = async (data) => {
  const name = data.get("name");
  const value = data.get("value");
  const object = { name, value };
  const response = await addBudget(object);
  
  redirect("/budgets");
};

