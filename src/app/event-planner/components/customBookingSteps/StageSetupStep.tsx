'use client';
import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const stageOptions = [
  { name: 'Simple Backdrop', cost: 600 },
  { name: 'LED Floral Stage', cost: 1000 },
  { name: 'Crystal Sofa Setup', cost: 850 },
  { name: 'Designer Theme Stage', cost: 1200 },
];

const StageSetupStep: React.FC<Props> = ({ formData, setFormData }) => {
  const selected = formData.stageSetup;

  const handleSelect = (option: { name: string; cost: number }) => {
    setFormData({
      ...formData,
      stageSetup: option.name,
      stageSetupCost: option.cost,
    });
  };

  return (
    <div className="space-y-4 text-black">
      <label className="block text-lg font-medium text-black">
        Choose a Stage Setup
      </label>

      <div className="grid grid-cols-2 gap-3">
        {stageOptions.map((option) => (
          <button
            key={option.name}
            type="button"
            onClick={() => handleSelect(option)}
            className={`border rounded-md p-3 text-center ${
              selected === option.name
                ? 'bg-pink-500 text-white font-semibold'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            <div>{option.name}</div>
            <div className="text-sm text-gray-700">Rs {option.cost}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-3 text-sm text-gray-700">
          <strong>Estimated Cost:</strong> Rs {formData.stageSetupCost}
        </div>
      )}
    </div>
  );
};

export default StageSetupStep;
