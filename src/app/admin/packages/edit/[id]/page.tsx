'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

// Define the type for the URL parameters, with id as a string (since URL params are always strings)
interface Params {
  id: string;
}

const EditPackageForm = () => {
  const params = useParams();
  const id = params?.id as string; 

  // Convert id to a number (you can use parseInt or Number)
  const packageId = id ? parseInt(id, 10) : null; // Ensure it's a number or null if invalid

  const [formData, setFormData] = useState({
    event_category: '',
    venue_type: '',
    package_type: '',
    name: '',
    price: 0,
    package_features: '',
    description: '',
    image_url: ''
  });

  // Fetch package details based on the `packageId` when the component mounts
  useEffect(() => {
    if (packageId !== null) {
      // Replace with your actual API call to fetch package details by ID
      fetch(`/api/packages/single/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData(data); // Set form data with the fetched package details
        })
        .catch((error) => {
          console.error('Error fetching package:', error);
        });
    }
  }, [packageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  
    try {
      const response = await fetch(`/api/packages/update/${packageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message || 'Package updated successfully!');
      } else {
        alert(result.error || 'Update failed.');
      }
    } catch (error) {
      console.error('Error during update:', error);
      alert('Something went wrong!');
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-xl bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Venue Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Category */}
        <div>
          <label className="block mb-1 text-sm font-medium">Event Category</label>
          <select
            name="event_category"
            value={formData.event_category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Event</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Birthday">Birthday</option>
            <option value="Concert">Concert</option>
          </select>
        </div>

        {/* Venue Type */}
        <div>
          <label className="block mb-1 text-sm font-medium">Venue Type</label>
          <select
            name="venue_type"
            value={formData.venue_type}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Venue</option>
            <option value="Marriage Hall">Marriage Hall</option>
            <option value="Banquet">Banquet</option>
            <option value="Outdoor Garden">Outdoor Garden</option>
            <option value="Auditorium">Auditorium</option>
          </select>
        </div>

        {/* Package Type */}
        <div>
          <label className="block mb-1 text-sm font-medium">Package Type</label>
          <input
            type="text"
            name="package_type"
            value={formData.package_type}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Standard, Premium, Deluxe"
            required
          />
        </div>

        {/* Package Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Package Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 text-sm font-medium">Price (PKR)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
            min="0"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block mb-1 text-sm font-medium">Features (comma-separated)</label>
          <textarea
            name="package_features"
            value={formData.package_features}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows={2}
            placeholder="e.g. Air Conditioning, Buffet, Stage, Sound System"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 text-sm font-medium">Image URL (optional)</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="https://your-image-url.com/image.jpg"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500"
          >
            Update Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPackageForm;
