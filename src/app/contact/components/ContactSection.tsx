"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-black text-white pt-10">
      {/* Contact Info */}
      <div className="container mx-auto px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-yellow-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold uppercase">Phone</h3>
          <p className="text-gray-300">Telephone: (+92) 304-1115211</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-yellow-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold uppercase">E-Mail</h3>
          <p className="text-gray-300">support.info@andalusianbanquets.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold uppercase">Address</h3>
          <p className="text-gray-300">
            33 Zulfiqar Street 1, DHA Phase VIII, Karachi, Sindh 75500
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <iframe
          title="Google Map"
          className="w-full h-[400px] md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.43253604976!2d67.06809888715827!3d24.813829525177846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33813b31065d7%3A0x5a9f5c2b0a5a88a0!2sAndalusian%20Banquets!5e0!3m2!1sen!2s!4v1710243562652!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
