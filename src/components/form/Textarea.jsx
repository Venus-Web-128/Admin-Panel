import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const Textarea = ({ name, label, className, placeholder }) => {
  return (
    <div className={`w-full mb-4 ${className}`}>
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <FastField
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Textarea;

