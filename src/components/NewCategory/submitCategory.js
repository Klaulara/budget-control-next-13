"use server";

import { redirect } from 'next/navigation';

import { addCategory } from '@/services/api/category';

export const onSubmit = async (data) => {
  const name = data.get("name");
  const url = data.get("url");
  const object = { name, url };
  const response = await addCategory(object);
  
  redirect("/messages");
};
