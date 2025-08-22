import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

const RECAPTCHA_SITE_KEY = "6LfJy0MrAAAAADNzuW2l5gKWchlFr9BgH0eAKJfV";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      Swal.fire("Captcha Required", "Please verify you are not a robot.", "warning");
      return;
    }

    setLoading(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), formData);

      // Send email via EmailJS
      await emailjs.send(
        "Contact Us",     // replace with your actual service ID
        "template_om3l36v",    // replace with your actual template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "RsUuux2h-6A4Js4wE"         // replace with your actual user ID
      );

      Swal.fire("Success", "Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
      setCaptchaValue(null);
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          We'd love to hear from you. Fill out the form and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>

          <div>
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
