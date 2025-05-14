'use client';
import React, { useState, useEffect } from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const costPerGuest = 10;

const GuestCountStep: React.FC<Props> = ({ formData, setFormData }) => {
  const [customCount, setCustomCount] = useState(formData.guestCount || '');

  useEffect(() => {
    const count = parseInt(customCount);
    if (!isNaN(count) && count > 0) {
      const totalCost = count * costPerGuest;
      setFormData({
        ...formData,
        guestCount: count,
        guestCountCost: totalCost,
      });
    } else {
      setFormData({
        ...formData,
        guestCount: 0,
        guestCountCost: 0,
      });
    }
  }, [customCount]);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        Enter number of guests
      </label>

      <input
        type="number"
        min={1}
        placeholder="e.g. 150"
        value={customCount}
        onChange={(e) => setCustomCount(e.target.value)}
        className="w-full p-2 border rounded-md text-black"
      />

      {customCount && !isNaN(Number(customCount)) && Number(customCount) > 0 && (
        <div className="text-sm text-gray-700 mt-2">
          <strong>Estimated Cost:</strong> Rs {Number(customCount) * costPerGuest}
        </div>
      )}
    </div>
  );
};

export default GuestCountStep;
