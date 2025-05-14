'use client';
import React, { useState } from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

// Updated prices in PKR
const subEventsMap: Record<string, { name: string; price: number }[]> = {
  Wedding: [
    { name: 'Mehndi', price: 10000 },
    { name: 'Barat', price: 20000 },
    { name: 'Reception', price: 15000 },
    { name: 'Nikkah', price: 12000 },
  ],
  Party: [
    { name: 'Birthday', price: 8000 },
    { name: 'Graduation', price: 9000 },
    { name: 'Anniversary', price: 7000 },
  ],
  Corporate: [
    { name: 'Seminar', price: 25000 },
    { name: 'Workshop', price: 30000 },
    { name: 'Conference', price: 35000 },
  ],
  Religious: [
    { name: 'Eid Milan', price: 5000 },
    { name: 'Quran Khwani', price: 4000 },
    { name: 'Milad', price: 6000 },
  ],
};

const SubEventStep: React.FC<Props> = ({ formData, setFormData }) => {
  const selectedCategory = formData.eventCategory;
  const [customInput, setCustomInput] = useState('');
  const [customPrice, setCustomPrice] = useState(0);

  const options = selectedCategory ? subEventsMap[selectedCategory] || [] : [];

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubEvent = e.target.value;
    const selectedSubEventObj = options.find((sub) => sub.name === selectedSubEvent);
    if (selectedSubEventObj) {
      setFormData({
        ...formData,
        subEventType: selectedSubEventObj.name,
        subEventPrice: selectedSubEventObj.price,
      });
    }
    setCustomInput('');
    setCustomPrice(0);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomInput(value);
    const customPrice = 10000; // Default custom price in PKR
    setCustomPrice(customPrice);
    setFormData({ ...formData, subEventType: value, subEventPrice: customPrice });
  };

  if (!selectedCategory) {
    return <p className="text-gray-600">Please select an Event Category first.</p>;
  }

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        Select or Enter Sub-Event Type
      </label>

      <select
        value={customInput ? '' : formData.subEventType || ''}
        onChange={handleDropdownChange}
        className="w-full p-2 border rounded-md text-black"
      >
        <option value="" disabled>
          Select from list
        </option>
        {options.map((sub) => (
          <option key={sub.name} value={sub.name}>
            {sub.name} - ₨{sub.price.toLocaleString()}
          </option>
        ))}
      </select>

      <div className="text-center text-sm text-gray-500">or</div>

      <input
        type="text"
        placeholder="Enter custom sub-event (e.g. Haldi + Sangeet)"
        value={customInput}
        onChange={handleCustomChange}
        className="w-full p-2 border rounded-md text-black"
      />

      {/* Show the selected price */}
      <div className="mt-2 text-sm text-gray-600">
        <strong>Selected Price: </strong>
        ₨{formData.subEventPrice?.toLocaleString() || '0'}
      </div>
    </div>
  );
};

export default SubEventStep;
