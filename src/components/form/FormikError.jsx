import React from 'react';

const FormikError = ({ children }) => {
    return (
        <small className="block text-red-600 mb-4 text-sm">{children}</small>
    );
}

export default FormikError;
