import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const RECAPTCHA_SITE_KEY = '6LdEwFIrAAAAAAw5NQ3TvG0T8wJcqMc8SvNuL7IX';

export default function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    style: '',
    bankTransfer: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("Please agree to the Terms & Conditions before submitting.");
      return;
    }

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    // ✅ Send email via EmailJS
    emailjs.send('Booking', 'template_yjpv6sj', {
      name: formData.name,
      date: formData.date,
      time: formData.time,
      style: formData.style,
      bankTransfer: formData.bankTransfer,
    }, 'RsUuux2h-6A4Js4wE')
    .then(() => {
      alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}. Email notification sent!`);
      setFormData({ name: '', date: '', time: '', style: '', bankTransfer: '' });
      setAgreeToTerms(false);
      setCaptchaValue(null);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Error sending booking email. Please try again.');
    });

    if (onSubmit) onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-gray-800 dark:text-white space-y-6"
    >
      {/* Payment Info */}
      <div className="bg-gray-100 dark:bg-gray-800 border border-pink-300 dark:border-pink-600 rounded-md p-4 text-sm">
        <p className="font-semibold mb-1">💳 Payment Details:</p>
        <p>Bank Name: <strong>First Bank</strong></p>
        <p>Account Name: <strong>Adebayo Zanab Temitope</strong></p>
        <p>Account Number: <strong>3129522877</strong></p>
        <p className="mt-2 text-xs italic text-pink-600 dark:text-pink-400">
          Please make payment and input your transfer reference number below.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border dark:border-gray-700 dark:bg-gray-900 px-3 py-2 rounded-md dark:text-white"
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border dark:border-gray-700 dark:bg-gray-900 px-3 py-2 rounded-md dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border dark:border-gray-700 dark:bg-gray-900 px-3 py-2 rounded-md dark:text-white"
          />
        </div>
      </div>

      {/* Preferred Style */}
      <div>
        <label className="block text-sm font-medium mb-1">Preferred Style</label>
        <input
          type="text"
          name="style"
          value={formData.style}
          onChange={handleChange}
          placeholder="e.g., Bridal Glam, Natural Look"
          className="w-full border dark:border-gray-700 dark:bg-gray-900 px-3 py-2 rounded-md dark:text-white"
        />
      </div>

      {/* Bank Transfer Ref */}
      <div>
        <label className="block text-sm font-medium mb-1">Bank Transfer Ref Number</label>
        <input
          type="text"
          name="bankTransfer"
          value={formData.bankTransfer}
          onChange={handleChange}
          placeholder="Enter bank ref code"
          required
          className="w-full border dark:border-gray-700 dark:bg-gray-900 px-3 py-2 rounded-md dark:text-white"
        />
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          id="terms"
          checked={agreeToTerms}
          onChange={(e) => setAgreeToTerms(e.target.checked)}
          className="mt-1"
          required
        />
        <label htmlFor="terms" className="text-gray-700 dark:text-gray-300">
          I agree to the{' '}
          <Link to="/terms" className="text-pink-600 dark:text-pink-400 underline hover:text-pink-700">
            Terms & Conditions
          </Link>
        </label>
      </div>

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md w-full sm:w-auto"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
