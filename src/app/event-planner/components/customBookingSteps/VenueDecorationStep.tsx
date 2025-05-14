'use client';
import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

// Decoration options with cost
const decorOptions = [
  { name: 'Basic Floral', cost: 500 },
  { name: 'Royal', cost: 1000 },
  { name: 'Modern LED', cost: 1200 },
  { name: 'Garden Theme', cost: 800 },
];

const VenueDecorationStep: React.FC<Props> = ({ formData, setFormData }) => {
  const selected = formData.venueDecoration;

  const handleSelect = (option: { name: string; cost: number }) => {
    setFormData({
      ...formData,
      venueDecoration: option.name,
      venueDecorationCost: option.cost,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        Choose a Venue Decoration Theme
      </label>

      <div className="grid grid-cols-2 gap-3 text-black">
        {decorOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => handleSelect(option)}
            className={`border rounded-md p-3 text-center ${
              selected === option.name
                ? 'bg-pink-500 text-black font-semibold'
                : 'bg-white text-gray-700'
            }`}
          >
            <div>{option.name}</div>
            <div className="text-sm text-gray-600">(Rs {option.cost})</div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-3 text-sm text-gray-700">
          <strong>Estimated Cost:</strong> Rs {formData.venueDecorationCost}
        </div>
      )}
    </div>
  );
};

export default VenueDecorationStep;
