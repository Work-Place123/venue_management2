'use client';

import { useState } from 'react';
import EventCategoryStep from './components/customBookingSteps/EventCategoryStep';
import SubEventStep from './components/customBookingSteps/SubEventStep';
import GuestCountStep from './components/customBookingSteps/GuestCountStep';
import VenueDecorationStep from './components/customBookingSteps/VenueDecorationStep';
import StageSetupStep from './components/customBookingSteps/StageSetupStep';
import EntranceDecorationStep from './components/customBookingSteps/EntranceDecorationStep';
import PhotographyStep from './components/customBookingSteps/PhotographyStep';
import FinalReviewStep from './components/customBookingSteps/FinalReviewStep';
import CateringStep from './components/customBookingSteps/CateringStep';
import CustomerDetailsStep from './components/customBookingSteps/CustomerDetailsStep';
import PaymentStep from './components/customBookingSteps/PaymentStep';

const steps = [
  'Event Category',
  'Sub-Event Type',
  'Guest Count',
  'Venue Decoration',
  'Stage Setup',
  'Entrance Decoration',
  'Photography & Videography',
  'Catering',
  'Customer Details',
  'Payment',
  'Final Review',
];

export default function CustomBookingPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<any>({});

  const renderStep = () => {
    switch (step) {
      case 0:
        return <EventCategoryStep formData={formData} setFormData={setFormData} />;
      case 1:
        return <SubEventStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <GuestCountStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <VenueDecorationStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <StageSetupStep formData={formData} setFormData={setFormData} />;
      case 5:
        return <EntranceDecorationStep formData={formData} setFormData={setFormData} />;
      case 6:
        return <PhotographyStep formData={formData} setFormData={setFormData} />;
      case 7:
        return <CateringStep formData={formData} setFormData={setFormData} />;
      case 8:
        return (
          <CustomerDetailsStep
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep((s) => s + 1)}
          />
        );
      case 9:
        return <PaymentStep formData={formData} setFormData={setFormData} />;
      case 10:
        return <FinalReviewStep formData={formData} setFormData={setFormData} />;
      default:
        return <div className="text-black">Step not found</div>;
    }
  };

  const isNextDisabled =
    (step === 0 && !formData.eventCategory) ||
    (step === 1 && !formData.subEventType) ||
    (step === 2 && !formData.guestCount) ||
    (step === 3 && !formData.venueDecoration) ||
    (step === 4 && !formData.stageSetup) ||
    (step === 5 && !formData.entranceDecoration) ||
    (step === 6 && !formData.photographyPackage) ||
    (step === 7 &&
      (!formData.catering ||
        (!formData.catering.dishes?.length && !formData.catering.customDish))) ||
    (step === 9 && (!formData.paymentMethod || !formData.paymentAmount)) ||
    (step === 10 && !formData.confirmation);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 text-black">
        <div className="mb-6 mt-6">
          <h1 className="text-2xl font-bold">Custom Event Planner</h1>
          <p className="text-sm text-gray-700">
            Step {step + 1} of {steps.length}:{' '}
            <strong>{steps[step]}</strong>
          </p>
          <div className="w-full bg-gray-200 h-2 mt-2 rounded">
            <div
              className="h-2 bg-pink-500 rounded"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="border p-4 rounded-xl shadow bg-white">
          {renderStep()}
        </div>

        {/* Only show global buttons except for CustomerDetailsStep which handles its own Next */}
        {step !== 8 && (
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
            >
              Back
            </button>
            <button
              onClick={() => setStep((s) => s + 1)}
              className="px-4 py-2 bg-pink-500 text-white rounded"
              disabled={isNextDisabled}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
