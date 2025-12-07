import { FastField } from "formik";

const Switch = ({ name, label }) => {
  return (
    <div className="flex items-center mb-4">
      <FastField
        id={name}
        name={name}
        type="checkbox"
        className="w-5 h-5 border border-default-medium rounded-2xl bg-neutral-secondary-medium"
      />
      <label
        htmlFor={name}
        className="select-none ms-2 text-sm text-white text-heading"
      >
        {label}
      </label>
    </div>
  );
};

export default Switch;
