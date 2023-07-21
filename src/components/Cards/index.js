import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

export const CardBudget = ({ name, value, id }) => {
  return (
    <div className="max-w-sm w-80 m-4 p-6 text-black hover:text-white bg-white border hover:bg-sky-700 border-sky-400 rounded-lg shadow dark:bg-sky-800 dark:border-sky-700">
      <h4 className="text-xl  m-2 p-2">Name: {name}</h4>
      <p className="text-xl m-2 p-2">
        Value:{" "}
        {value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })}
      </p>
      <hr></hr>
      <Link
        className="inline-flex items-center text-blue-600 hover:underline border-sky-800 bg-white m-2 p-2 rounded-lg "
        href={`/budgets/${id}`}
      >
        Review
      </Link>
    </div>
  );
};

CardBudget.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export const CardCategory = ({ name, url, id }) => {
  return (
    <div className="bg-sky-700 m-3 p-2 rounded text-center">
      <h4 className="text-xl text-white m-2 p-2">Name: {name}</h4>
      <Image src={url} alt={name} width={100} height={100} />
    </div>
  );
};

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export const ViewBudget = ({ name, initialValue, difference }) => {
  return (
    <div className="bg-sky-700 m-3 p-2 rounded text-center">
      <h4 className="text-xl text-white m-2 p-2">Name: {name}</h4>

      <hr></hr>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-white m-2 p-2">
          Initial Amount:{" "}
          {initialValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          })}
        </p>
        <p className="text-xl text-white m-2 p-2">
          Actual Amount:{" "}
          {difference.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

ViewBudget.propTypes = {
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired,
  difference: PropTypes.number.isRequired,
};

export const ViewExpense = ({ name, value, date, image }) => {
  return (
    <div className="flex flex-row border-2 m-3 p-2 rounded text-center">
      {/* <Image src={image} alt={name} width={100} height={100} /> */}
      <h4 className="text-xl text-black m-2 p-2">Name: {name}</h4>
      <p className="text-xl text-black m-2 p-2">
        Value:{" "}
        {value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })}
      </p>
      <p className="text-xl text-black m-2 p-2">Date: {date.slice(0, 10)}</p>
    </div>
  );
};

ViewExpense.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
};
