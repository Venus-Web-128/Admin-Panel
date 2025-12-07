import { ErrorMessage, FastField } from 'formik';

const Input = ({ name, type, label }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <FastField
                type={type}
                id={name}
                name={name}
                autoComplete="off"
                placeholder={`لطفاً ${label} را وارد کنید`}
               className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage className='text-red-500' name={name}  />
        </div>
    );
};



export default Input;