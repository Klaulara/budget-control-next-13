"use client";

import { onSubmit } from "./submitBudget";

const NewBudget = () => {

  return (
    <form action={onSubmit}> 
      <div className="flex flex-col justify-center bg-sky-700 m-5 p-3">
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">Name Budget</label>
          <input name="name" className="text-center rounded m-2 p-2" type="text" placeholder="name budget" />
        </div>
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">Value Budget</label>
          <input name="value" className="text-center rounded m-2 p-2" type="number" placeholder="value budget" />
        </div>  
        <button className="bg-sky-500 rounded m-4 p-2" type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default NewBudget;
