'use client'

import PropTypes from "prop-types";
import Link from "next/link";

export const ButtonPrimary = ({ children, href = "" }) => (
  <Link
    className="flex justify-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded "
    href={href}
  >
    {children}
  </Link>
);

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

export const ButtonTittle = ({ children, onClick = () => {}, disabled = false, type = "button" }) => (
    <button 
        className="focus:outline-none focus:text-sky-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14 "
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

export const ButtonSecondary = ({ children, href = ""}) => (
    <Link 
        className="flex justify-start items-center space-x-6 hover:text-white focus:bg-sky-700 focus:text-white hover:bg-sky-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
        href={href}
    >
        {children}
    </Link>
);

ButtonSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string
};

export const ButtonPage = ({ children, href = ""}) => (
    <Link
        className="flex justify-start items-center space-x-6 text-white focus:bg-sky-700 bg-sky-700 rounded px-3 py-2  w-full md:w-52"
        href={href}
    >
        {children}
    </Link>
);

ButtonPage.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string
};