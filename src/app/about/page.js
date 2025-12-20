"use client";

import Button from "../components/button/page.js";
import {
  FaCheck,
  FaRemoveFormat,
  FaSave,
  FaTimes,
  FaTrash,
  FaUpload,
} from "react-icons/fa";
import Dropdown from "../components/dropdown/page.js";

export default function AboutPage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const dropdownOptions = [
    { value: 0, label: "India" },
    { value: 1, label: "Japan" },
    { value: 2, label: "Germany" },
  ];
  const dropdownOptions1 = [
    { value: 0, label: <><FaSave className="inline mr-2 mb-1" /> Save</> },
    { value: 1, label: <><FaTimes className="inline mr-2 mb-1" />Remove</> },
    { value: 2, label: <><FaUpload className="inline mr-2 mb-1" /> Upload</> },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1>Buttons</h1>
      <div className="flex items-center justify-start gap-4 mb-8">
        <Button
          href="/"
          onClick={handleClick}
          label="Upgrade"
          className="text-lg rounded-sm"
          variant="primary"
        />

        <Button
          href="/"
          onClick={handleClick}
          label="Secondary"
          className="text-lg rounded-md"
          variant="secondary"
          size="medium"
        />

        <Button
          href="/"
          onClick={handleClick}
          className="text-lg rounded-lg"
          variant="succes"
          size="medium"
        >
          <FaSave className="inline mr-2 mb-1" />
          <span>Save</span>
        </Button>

        <Button
          href="/"
          onClick={handleClick}
          className="text-lg rounded-xl"
          variant="succes"
          size="medium"
        >
          <FaCheck className="inline mr-2 mb-1" />
          <span>Success</span>
        </Button>

        <Button
          href="/"
          onClick={handleClick}
          label="Danger"
          className="text-lg rounded-full"
          variant="danger"
          size="large"
        >
          <FaTrash className="inline mr-2 mb-1" />
          <span>Delete</span>
        </Button>

        <Button
          href="/"
          onClick={handleClick}
          className="text-lg rounded-full text-blue-500"
          variant="transparent"
          size="large"
        >
          <FaUpload className="inline mr-2 mb-1" />
          <span>Upload</span>
        </Button>

        <Button
          href="/"
          onClick={handleClick}
          className="text-lg rounded-2xl text-blue-500"
          variant="transparent"
          size="large"
        >
          <FaUpload className="inline mr-2 mb-1" />
          <span>Upload</span>
        </Button>

        <Button
          href="/"
          onClick={handleClick}
          className="text-lg rounded-2xl text-red-500"
          variant="transparent"
          size="large"
        >
          <FaTimes className="inline mr-2 mb-1" />
          <span>Remove</span>
        </Button>
      </div>

      <h1>Dropdowns</h1>
      <div className="flex items-center justify-start gap-4">
        <Dropdown
          id="dropdown"
          options={dropdownOptions}
          value={dropdownOptions[0].value}
          buttonClassName="border border-blue-500 rounded-lg p-3"
          placeholder="Select an option"
        />
        <Dropdown
          id="dropdown2"
          options={dropdownOptions}
          value={dropdownOptions[1].value}
          buttonClassName="border-2 border-gray-300 rounded-lg p-3 bg-white hover:border-blue-400 focus:outline-none focus:border-blue-500 transition-colors"
          listClassName="max-h-48 rounded-lg"
          placeholder="Choose an option"
        />
        <Dropdown
          id="dropdown3"
          options={dropdownOptions}
          value={dropdownOptions[2].value}
          buttonClassName="border border-gray-200 rounded-xl p-3 bg-gradient-to-r from-blue-50 to-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Select..."
        />
        <Dropdown id="asdasdasd" options={dropdownOptions1} value={dropdownOptions1[0].value} />
      </div>
    </div>
  );
}
