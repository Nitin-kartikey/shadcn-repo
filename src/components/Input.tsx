import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, placeholder, icon }) => {
  return (
    <div className="flex flex-col space-y-2 w-full max-w-md">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}
        <input
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
