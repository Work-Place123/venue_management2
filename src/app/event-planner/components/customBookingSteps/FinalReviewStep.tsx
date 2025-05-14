'use client';
import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const FinalReviewStep = ({ formData, setFormData }: Props) => {
  const handleConfirm = () => {
    alert('Booking confirmed!');
  };

  const parsedGuestCount = () => {
    const count = parseInt(formData.guestCount);
    return isNaN(count) ? 300 : count;
  };

  const formatRs = (amount: number) => `Rs ${amount.toLocaleString()}`;

  const guestCostPerHead = 10;
  const guestTotal = parsedGuestCount() * guestCostPerHead;

  // Grab all dynamic prices safely
  const eventCategoryCost = formData.eventCategory?.price || 0;
  const subEventCost = formData.subEvent?.price || 0;
  const venueDecorationCost = formData.venueDecoration?.price || 0;
  const stageSetupCost = formData.stageSetup?.price || 0;
  const entranceDecorationCost = formData.entranceDecoration?.price || 0;
  const photographyCost = formData.photography?.price || 0;
  const videographyCost = formData.includeVideography ? (formData.videography?.price || 0) : 0;
  const cateringCost = formData.cateringCost || 0;
  const paymentAmount = formData.paymentAmount || 0;

  const totalCost =
    eventCategoryCost +
    subEventCost +
    guestTotal +
    venueDecorationCost +
    stageSetupCost +
    entranceDecorationCost +
    photographyCost +
    videographyCost +
    cateringCost;

  return (
    <div className="space-y-6 text-black p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-pink-600">Final Review</h2>
      <p className="text-center text-sm text-gray-500">Please review all your selections below.</p>

      <div className="space-y-4">
        <ReviewItem
          label="Event Category"
          value={
            formData.eventCategory?.name
              ? `${formData.eventCategory.name} (${formatRs(eventCategoryCost)})`
              : 'Not selected'
          }
        />
        <ReviewItem
          label="Sub Event"
          value={
            formData.subEvent?.name
              ? `${formData.subEvent.name} (${formatRs(subEventCost)})`
              : 'Not selected'
          }
        />
        <ReviewItem
          label="Guest Count"
          value={`${parsedGuestCount()} Guests (${formatRs(guestTotal)})`}
        />
        <ReviewItem
          label="Venue Decoration"
          value={
            formData.venueDecoration?.name
              ? `${formData.venueDecoration.name} (${formatRs(venueDecorationCost)})`
              : 'Not selected'
          }
        />
        <ReviewItem
          label="Stage Setup"
          value={
            formData.stageSetup?.name
              ? `${formData.stageSetup.name} (${formatRs(stageSetupCost)})`
              : 'Not selected'
          }
        />
        <ReviewItem
          label="Entrance Decoration"
          value={
            formData.entranceDecoration?.name
              ? `${formData.entranceDecoration.name} (${formatRs(entranceDecorationCost)})`
              : 'Not selected'
          }
        />
        <ReviewItem
          label="Photography Package"
          value={
            formData.photography?.name
              ? `${formData.photography.name} (${formatRs(photographyCost)})`
              : 'Not selected'
          }
        />
        <ReviewItem
          label="Include Videography"
          value={
            formData.includeVideography
              ? formData.videography?.name
                ? `${formData.videography.name} (${formatRs(videographyCost)})`
                : `Yes (${formatRs(videographyCost)})`
              : 'No'
          }
        />
        <ReviewItem
          label="Catering Selection"
          value={
            formData.cateringItems?.length > 0
              ? `${formData.cateringItems.map((item: any) => item.name).join(', ')} (${formatRs(cateringCost)})`
              : 'None'
          }
        />
        <ReviewItem label="Payment Method" value={formData.paymentMethod || 'Not Provided'} />
        <ReviewItem label="Paid Amount" value={formatRs(paymentAmount)} />

        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-700">Total Estimated Cost</h3>
          <p className="text-lg font-semibold text-gray-800">{formatRs(totalCost)}</p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setFormData({})}
          className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
        >
          Go Back
        </button>
        <button
          onClick={handleConfirm}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

const ReviewItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-pink-600">{label}</h3>
    <p className="text-md text-gray-800">{value}</p>
  </div>
);

export default FinalReviewStep;
