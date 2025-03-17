"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const steps = ["Overview", "Banquet", "Value Added Services", "Contact Information", "Payment Information", "Booking"];

const banquetOptions = [
  { name: "Luxury Hall", cost: 200000 },
  { name: "Outdoor Setup", cost: 150000 },
  { name: "VIP Seating", cost: 100000 },
];

const servicesList = [
  { name: "DJ with Sound", cost: 10000 },
  { name: "Basic Stage Package", cost: 172500 },
  { name: "Security Guards", cost: 50000 },
  { name: "Valet Service", cost: 25000 },
  { name: "Centrally Air Conditioned", cost: 75000 },
  { name: "100% Self Power Generator", cost: 60000 },
];

const ReservationPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    guests: "",
    date: "",
    banquet: [],
    services: [],
    totalCost: 0,
    advancePayment: "",
    paymentMode: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const calculateTotal = (banquet, services) => {
    const banquetCost = banquet.reduce((sum, item) => sum + banquetOptions.find((b) => b.name === item).cost, 0);
    const servicesCost = services.reduce((sum, item) => sum + servicesList.find((s) => s.name === item).cost, 0);
    return banquetCost + servicesCost;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectionChange = (type, item) => {
    setFormData((prev) => {
      const updatedSelection = prev[type].includes(item)
        ? prev[type].filter((i) => i !== item)
        : [...prev[type], item];
      return {
        ...prev,
        [type]: updatedSelection,
        totalCost: calculateTotal(
          type === "banquet" ? updatedSelection : prev.banquet,
          type === "services" ? updatedSelection : prev.services
        ),
      };
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="flex justify-center mb-6">
        {steps.map((s, index) => (
          <div key={index} className={`px-4 py-2 ${step === index ? 'bg-gold' : 'bg-gray-500'} text-black font-bold cursor-pointer`} onClick={() => setStep(index)}>
            {s}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="w-2/3  mr-10 ml-10 mx-auto bg-slate-600 text-white p-6 shadow-xl rounded-lg">
          <CardContent>
            <Progress value={(step + 1) * (100 / steps.length)} className="mb-4" />
            <h2 className="text-2xl font-bold text-center mb-4">{steps[step]}</h2>
            <form className="space-y-4">
              {step === 0 && (
                <>
                  <Label>Total Guests</Label>
                  <Input name="guests" value={formData.guests} onChange={handleChange} />
                  <Label>Event Date</Label>
                  <Input type="date" name="date" value={formData.date} onChange={handleChange} />
                </>
              )}
              {step === 1 && (
                <>
                  <Label>Select Banquet</Label>
                  {banquetOptions.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" checked={formData.banquet.includes(option.name)} onChange={() => handleSelectionChange("banquet", option.name)} />
                      <span className="ml-2">{option.name} - PKR {option.cost}</span>
                    </div>
                  ))}
                </>
              )}
              {step === 2 && (
                <>
                  <Label>Value Added Services</Label>
                  {servicesList.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" checked={formData.services.includes(service.name)} onChange={() => handleSelectionChange("services", service.name)} />
                      <span className="ml-2">{service.name} - PKR {service.cost}</span>
                    </div>
                  ))}
                </>
                          )}
            {step === 3 && (
                <>
                  <Label>Contact Name</Label>
                  <Input name="contactName" value={formData.contactName} onChange={handleChange} />
                  <Label>Phone Number</Label>
                  <Input name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
                  <Label>Email</Label>
                  <Input name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
                </>
                          )}
             {step === 4 && (
                <>
                  <Label>Advance Payment</Label>
                  <Input name="advancePayment" value={formData.advancePayment} onChange={handleChange} />
                  <Label>Payment Mode</Label>
                  <Input name="paymentMode" value={formData.paymentMode} onChange={handleChange} />
                </>
                          )}
                {step === 5 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Booking</h2>
                  <img src="/booking-icon.png" alt="Booking Icon" className="mx-auto w-24 h-24 mb-4" />
                  <p className="text-lg">Thank you for booking. Our representative will contact you back shortly.</p>
                </div>
              )}
            </form>
            <div className="flex justify-between mt-6">
              {step > 0 && <Button onClick={prevStep}>Back</Button>}
              {step < steps.length - 1 && <Button onClick={nextStep}>Next</Button>}
            </div>
          </CardContent>
        </div>

        <div className="w-1/3 bg-gray-600 text-white p-6 shadow-xl rounded-lg">
          <h3 className="text-xl font-bold mb-4">Selected Options</h3>
          <div className="space-y-2">
            <p><strong>Guests:</strong> {formData.guests}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <div><strong>Banquet:</strong>
              {formData.banquet.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div><strong>Services:</strong>
              {formData.services.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <p><strong>Total Cost:</strong> PKR {formData.totalCost}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
