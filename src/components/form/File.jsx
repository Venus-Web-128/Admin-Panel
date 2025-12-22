import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const File = ({ name, label, className, placeholder }) => {
  return (
    <FastField>
      {({ form }) => {
        return (
          <div className={`w-full ${className}`}>
            <div className="flex items-center gap-2 mb-3">
              <input
                type="file"
                name={name}
                placeholder={placeholder}
                onChange={(e) => form.setFieldValue(name, e.target.files[0])}
                className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="w-24 text-center bg-gray-100 border rounded px-2 py-1 text-sm">
                {label}
              </span>
            </div>
            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </FastField>
  );
};

export default File;
