import { FastField } from 'formik';
import React from 'react';

const Switch = ({ name, label }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <FastField
        type="checkbox"
        name={name}
        className="h-5 w-10 rounded-full appearance-none bg-gray-300 checked:bg-blue-600 transition-colors cursor-pointer"
      />
      <label className="text-sm text-gray-700">{label}</label>
    </div>
  );
}

export default Switch;
