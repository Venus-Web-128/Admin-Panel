import React from 'react';

const Avatar = ({name,imagePath}) => {
    return (
        <div>
            <li className="flex flex-col items-center py-4">
                <img
                    src="/assets/images/avatar/user2.jpg"
                    className="w-20 h-20 rounded-full object-cover ring-2  ring-gray-700"
                    alt={imagePath}
                />
                <div className="mt-2 text-sm text-gray-200">{name}</div>
            </li>
        </div>
    );
}

export default Avatar;
