'use client';

import React from 'react';

type Props = {
  formData: any;
};

const ThankYouPage = ({ formData }: Props) => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-black bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center">Thank You for Your Booking!</h2>
      <p className="text-center text-lg text-gray-500 mt-2">Your booking has been successfully confirmed.</p>

      <div className="mt-6 space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-pink-500">Booking Summary</h3>
          <ul className="text-lg text-gray-800 space-y-2">
            <li><strong>Event Category:</strong> {formData.eventCategory}</li>
            <li><strong>Sub-Event Type:</strong> {formData.subEventType}</li>
            <li><strong>Guest Count:</strong> {formData.guestCount}</li>
            <li><strong>Venue Decoration:</strong> {formData.venueDecoration}</li>
            <li><strong>Stage Setup:</strong> {formData.stageSetup}</li>
            <li><strong>Entrance Decoration:</strong> {formData.entranceDecoration}</li>
            <li><strong>Photography Package:</strong> {formData.photographyPackage}</li>
            <li><strong>Include Videography:</strong> {formData.includeVideography ? 'Yes' : 'No'}</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-pink-500">What Happens Next?</h3>
          <p className="text-lg text-gray-800">
            Our team will reach out to you shortly to confirm the details of your booking. You’ll receive an email with the full confirmation and next steps.
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">If you have any questions, feel free to reach out to us at <strong>support@eventplanner.com</strong></p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-200">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
