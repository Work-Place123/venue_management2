'use client';

import React from 'react';

interface Props {
  formData: any;
  setFormData: (data: any) => void;
}

const entranceOptions = [
  { name: 'Floral Arch', cost: 300 },
  { name: 'Balloon Arch', cost: 150 },
  { name: 'Carpet Entrance', cost: 200 },
  { name: 'Light Tunnel', cost: 500 },
  { name: 'Custom Design', cost: 800 },
];

const EntranceDecorationStep: React.FC<Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = entranceOptions.find((o) => o.name === e.target.value);
    if (selectedOption) {
      setFormData({
        ...formData,
        entranceDecoration: selectedOption.name,
        entranceDecorationCost: selectedOption.cost,
      });
    }
  };

  return (
    <div className="space-y-4 text-black">
      <h2 className="text-xl font-semibold">Entrance Decoration</h2>
      <label htmlFor="entranceDecoration" className="block">
        Choose Decoration Style:
      </label>
      <select
        id="entranceDecoration"
        value={formData.entranceDecoration || ''}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded text-black"
      >
        <option value="">Select...</option>
        {entranceOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name} - Rs {option.cost}
          </option>
        ))}
      </select>

      {formData.entranceDecoration && (
        <p className="text-sm text-gray-700">
          <strong>Selected Cost:</strong> Rs {formData.entranceDecorationCost}
        </p>
      )}
    </div>
  );
};

export default EntranceDecorationStep;
