// EventCategoryStep.tsx
import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

// Prices updated in PKR
const categories = [
  { name: 'Wedding', price: 50000 },
  { name: 'Party', price: 30000 },
  { name: 'Corporate', price: 40000 },
  { name: 'Religious', price: 20000 },
];

const EventCategoryStep: React.FC<Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    const selectedPrice =
      categories.find((cat) => cat.name === selectedCategory)?.price || 0;

    setFormData({
      ...formData,
      eventCategory: selectedCategory,
      eventCategoryPrice: selectedPrice,
      subEventType: '',
      subEventPrice: 0,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        Select Event Category
      </label>
      <select
        value={formData.eventCategory || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded-md text-black"
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name} - ₨ {cat.price.toLocaleString()}
          </option>
        ))}
      </select>

      {formData.eventCategory && (
        <div className="mt-2 text-sm text-gray-600">
          <strong>Selected Price: </strong> ₨
          {formData.eventCategoryPrice?.toLocaleString() || 0}
        </div>
      )}
    </div>
  );
};

export default EventCategoryStep;
