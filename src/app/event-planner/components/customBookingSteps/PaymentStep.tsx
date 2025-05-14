// src/components/customBookingSteps/PaymentStep.tsx
'use client';

import { useState } from 'react';
import axios from 'axios';  // Make sure to import axios for making HTTP requests

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const PaymentStep = ({ formData, setFormData }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState(formData.paymentMethod || '');
  const [paymentAmount, setPaymentAmount] = useState(formData.paymentAmount || 0);
  const [paymentProof, setPaymentProof] = useState<File | null>(formData.paymentProof || null);

  const handlePaymentProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPaymentProof(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Update the form data state
    setFormData({
      ...formData,
      paymentMethod,
      paymentAmount,
      paymentProof,
    });

    // Send payment details to backend to generate payment URL
    try {
      const response = await axios.post('/api/payment/createPayment', {
        amount: paymentAmount,
        paymentMethod,
        email: formData.customerDetails?.email,  // Assuming customer details are in formData
        fullName: formData.customerDetails?.fullName,  // Assuming customer details are in formData
      });

      if (response.data.paymentUrl) {
        // Redirect user to PayFast payment page
        window.location.href = response.data.paymentUrl;
      } else {
        console.error('Payment URL not received');
      }
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <div className="space-y-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">💳 Payment Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-400"
          >
            <option value="">-- Select Payment Method --</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </div>

        {/* Payment Amount */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Payment Amount</label>
          <input
            type="number"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(Number(e.target.value))}
            placeholder="Amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-400"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
            disabled={!paymentMethod || !paymentAmount}
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentStep;
