import { onSubmit } from "./submitExpense";
import { getListCategories } from "@/services/api/category";

const NewExpense = async({ id }) => {
  const categories = await getListCategories();

  return (
    <form action={onSubmit}>
      <div className="flex flex-col justify-center bg-sky-700 m-5 p-3">
        <input name="budget_id" type="hidden" value={id} />
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">
            Name Expense
          </label>
          <input
            name="name"
            className="text-center rounded m-2 p-2"
            type="text"
            placeholder="name expense"
          />
        </div>
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">
            Value Budget
          </label>
          <input
            name="value"
            className="text-center rounded m-2 p-2"
            type="number"
            placeholder="value expense"
          />
        </div>
        <div className="flex flex-col m-2">
          <label className="text-center text-2xl text-white">Choose a category</label>
          <select name="category" className="text-center rounded m-2 p-2"> required
            {categories.data.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-sky-500 rounded m-4 p-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewExpense;
