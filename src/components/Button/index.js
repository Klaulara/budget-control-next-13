'use client'

import PropTypes from "prop-types";

export const ButtonPrimary = ({ children, onClick = () => {}, disabled = false, type = "button" }) => (
  <button
    className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded "
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export const ButtonTittle = ({ children, onClick = () => {}, disabled = false, type = "button" }) => (
    <button 
        className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14 "
        onClick={onClick}
        disabled={disabled}
        type={type}
    >
        {children}
    </button>
);

ButtonTittle.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
};

export const ButtonSecondary = ({ children, onClick = () => {}, disabled = false, type = "button" }) => (
    <button
        className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
        onClick={onClick}
        disabled={disabled}
        type={type}
    >
        {children}
    </button>
);

ButtonSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
};