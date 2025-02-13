import React from "react";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import { FaUser } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">User Form</h1>

        <div className="space-y-6">
          <Input label="Username" placeholder="Enter your name" Icons={<FaUser />} />

          <Dropdown label="Color Options" options={["Red", "Green", "Blue"]} />

          <Dropdown label="Company Options" options={["Puma", "Adidas", "Levis"]}/>
        </div>
      </div>
    </div>
  );
};

export default App; 
