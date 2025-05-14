"use client";

import { useState, useEffect } from "react";

type FormData = {
  guestCount?: number;
  catering?: {
    mealType: string;
    cuisine: string;
    dishes: string[];
    customDish: string;
    guestCount: number;
    addOns: string[];
  };
};

type Props = {
  formData: FormData;
  setFormData: (data: FormData) => void;
};

const dishesByCuisine: { [key: string]: string[] } = {
  Pakistani: ["Biryani", "Karahi", "Nihari", "Haleem"],
  Chinese: ["Fried Rice", "Manchurian", "Chow Mein", "Spring Rolls"],
  Italian: ["Pizza", "Pasta", "Lasagna", "Risotto"],
};

const FoodSelectionStep = ({ formData, setFormData }: Props) => {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [customDish, setCustomDish] = useState("");
  const [guestCount, setGuestCount] = useState<number>(formData.guestCount || 1);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);

  const handleDishChange = (dish: string) => {
    if (selectedDishes.includes(dish)) {
      setSelectedDishes(selectedDishes.filter((d) => d !== dish));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const handleAddOnChange = (addOn: string) => {
    if (addOns.includes(addOn)) {
      setAddOns(addOns.filter((a) => a !== addOn));
    } else {
      setAddOns([...addOns, addOn]);
    }
  };

  const calculateTotal = () => {
    let dishCount = selectedDishes.length;
    if (customDish.trim() !== "") {
      dishCount += 1;
    }
    const perDishCost = 200;
    const dishCost = perDishCost * dishCount;
    const addOnCost = addOns.includes("Drinks") ? 50 : 0;
    const total = (dishCost + addOnCost) * guestCount;
    return total;
  };

  useEffect(() => {
    setTotalCost(calculateTotal());
    setFormData({
      ...formData,
      catering: {
        mealType: formData.catering?.mealType || "",
        cuisine: selectedCuisine,
        dishes: selectedDishes,
        customDish,
        guestCount,
        addOns,
      },
    });
  }, [
    selectedCuisine,
    selectedDishes,
    customDish,
    guestCount,
    addOns,
    setFormData,
  ]);

  return (
    <div className="space-y-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🍽️ Food Selection
      </h2>

      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Select Cuisine:
        </label>
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">-- Choose Cuisine --</option>
          {Object.keys(dishesByCuisine).map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {selectedCuisine && (
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Select Dishes:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {dishesByCuisine[selectedCuisine].map((dish) => (
              <label
                key={dish}
                className="flex items-center bg-gray-50 p-2 rounded-md border hover:border-indigo-400"
              >
                <input
                  type="checkbox"
                  checked={selectedDishes.includes(dish)}
                  onChange={() => handleDishChange(dish)}
                  className="mr-2 accent-indigo-600"
                />
                {dish}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Add Custom Dish:
        </label>
        <input
          type="text"
          placeholder="e.g., Chicken Steak"
          value={customDish}
          onChange={(e) => setCustomDish(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Number of Guests:
        </label>
        <input
          type="number"
          value={guestCount}
          disabled
          className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600"
        />
        <p className="text-xs text-indigo-600 mt-1">
          <a href="#" onClick={() => alert("Navigate to Guest Count Step")}>
            Edit Guest Count
          </a>
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Add-ons:
        </label>
        <label className="flex items-center bg-gray-50 p-2 rounded-md border hover:border-indigo-400 w-max">
          <input
            type="checkbox"
            checked={addOns.includes("Drinks")}
            onChange={() => handleAddOnChange("Drinks")}
            className="mr-2 accent-indigo-600"
          />
          Drinks (₨50 per guest)
        </label>
      </div>

      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mt-4">
        <h3 className="font-bold text-lg text-indigo-700 mb-2">📋 Summary</h3>
        <p>
          <strong>Meal Type:</strong> {formData.catering?.mealType || "N/A"}
        </p>
        <p>
          <strong>Cuisine:</strong> {selectedCuisine || "N/A"}
        </p>
        <p>
          <strong>Selected Dishes:</strong>{" "}
          {selectedDishes.length > 0
            ? selectedDishes.join(", ")
            : "None selected"}
        </p>
        {customDish && (
          <p>
            <strong>Custom Dish:</strong> {customDish} (₨200)
          </p>
        )}
        <p>
          <strong>Guest Count:</strong> {guestCount}
        </p>
        <p>
          <strong>Add-ons:</strong>{" "}
          {addOns.length > 0 ? addOns.join(", ") : "None"}
        </p>
        <p className="mt-3 text-xl font-bold text-indigo-800">
          Total Cost: ₨{totalCost}
        </p>
      </div>
    </div>
  );
};

export default FoodSelectionStep;
