import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const PrevPageButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center cursor-pointer gap-2 bg-red-500 text-white px-1 py-1 rounded-lg shadow-md 
                 hover:bg-red-600 hover:shadow-lg transition-all duration-300"
    >      <span>بازگشت</span>
    </button>
  );
};

export default PrevPageButton;
