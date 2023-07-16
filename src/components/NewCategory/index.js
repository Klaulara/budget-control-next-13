"use client";

import { onSubmit } from "./submitCategory";

const NewCategory = () => {

  return (
    <form action={onSubmit}> 
      <div className="flex flex-col justify-center bg-sky-700 m-5 p-3">
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">Name Category</label>
          <input name="name" className="text-center rounded m-2 p-2" type="text" placeholder="nombre presupuesto" />
        </div>
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">Url Image</label>
          <input name="url" className="text-center rounded m-2 p-2" type="number" placeholder="valor presupuesto" />
        </div>  
        <button className="bg-sky-500 rounded m-4 p-2" type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default NewCategory;
