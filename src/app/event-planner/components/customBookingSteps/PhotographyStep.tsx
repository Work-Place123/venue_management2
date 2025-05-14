'use client';

import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const packageOptions = [
  { label: 'Basic', value: 'basic', cost: 500 },
  { label: 'Standard', value: 'standard', cost: 1000 },
  { label: 'Premium', value: 'premium', cost: 2000 },
];

const videographyCost = 700;

const PhotographyStep = ({ formData, setFormData }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';

    if (name === 'photographyPackage') {
      const selected = packageOptions.find((pkg) => pkg.value === value);
      setFormData({
        ...formData,
        photographyPackage: selected?.value || '',
        photographyCost: selected?.cost || 0,
      });
    } else if (name === 'includeVideography') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        includeVideography: checked,
        videographyCost: checked ? videographyCost : 0,
      });
    }
  };

  const selectedLabel =
    packageOptions.find((p) => p.value === formData.photographyPackage)?.label || '';

  return (
    <div className="space-y-4 text-black">
      <h2 className="text-xl font-semibold">Photography & Videography</h2>

      <div>
        <label className="block mb-1 font-medium">Photography Package</label>
        <select
          name="photographyPackage"
          value={formData.photographyPackage || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 text-black"
        >
          <option value="">Select package</option>
          {packageOptions.map((pkg) => (
            <option key={pkg.value} value={pkg.value}>
              {pkg.label} - Rs {pkg.cost}
            </option>
          ))}
        </select>

        {formData.photographyPackage && (
          <p className="text-sm mt-1 text-gray-600">
            Selected: <strong>{selectedLabel}</strong> (Rs {formData.photographyCost})
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="includeVideography"
          checked={formData.includeVideography || false}
          onChange={handleChange}
          className="accent-pink-500"
        />
        <label className="text-sm">Include Videography (+Rs{videographyCost})</label>
      </div>

      {formData.includeVideography && (
        <p className="text-sm text-gray-600">
          Videography Cost: Rs {videographyCost}
        </p>
      )}
    </div>
  );
};

export default PhotographyStep;
