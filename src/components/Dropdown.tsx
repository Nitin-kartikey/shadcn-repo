import React, { useState } from "react";

interface Options {
  options: string[],
}

interface DropdownProps extends Options {
  label: string;
  multiSelect?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, multiSelect = false }) => {
  const [selected, setSelected] = useState<string[]>(multiSelect ? [] : [""]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);

    setSelected(multiSelect ? selectedValues : [selectedValues[0]]);
  };

  return (
    <div className="flex flex-col space-y-2 w-full max-w-md">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        multiple={multiSelect}
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        onChange={handleSelect}
        value={multiSelect ? selected : selected[0]}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-600">
        Selected: {multiSelect ? selected.join(", ") : selected[0]}
      </p>
    </div>
  );
};

export default Dropdown;