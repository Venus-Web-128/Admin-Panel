import React from 'react';
import { useLocation } from 'react-router-dom';
import PrevPageButton from '../../components/PrevPageButton';

const CategoryChildren = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow mb-4">
      {/* دکمه بازگشت سمت چپ */}
      <PrevPageButton />

      {/* عنوان زیرگروه وسط */}
      <h5 className="text-center flex-1">
        <span className="text-gray-700">زیرگروه: </span>
        <span className="font-bold text-blue-600">
          {location.state?.parentData?.title}
        </span>
      </h5>

      {/* جای خالی سمت راست برای بالانس */}
      <div className="w-16"></div>
    </div>
  );
};

export default CategoryChildren;

