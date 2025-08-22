import React from "react";

export default function Policy() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Zeetem. Your privacy is important to us, and we are committed to protecting your personal data.
          This policy outlines how we collect, use, and protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full name and contact details (email, phone number)</li>
          <li>Booking information (date, time, service preference)</li>
          <li>Payment reference or transaction details</li>
          <li>Any other data you voluntarily provide via contact forms or feedback</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To process your bookings and inquiries</li>
          <li>To send you updates, confirmations, or promotional offers</li>
          <li>To improve our services and customer experience</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We take appropriate security measures to safeguard your personal data and protect it against unauthorized
          access, alteration, or disclosure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Sharing Your Information</h2>
        <p>
          Zeetem does not share, sell, or rent your personal information with third parties, except where required by
          law or necessary to fulfill your service request (e.g. payment processors).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to
          decline cookies if you prefer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>
          You have the right to access, correct, or request the deletion of your personal information. To do so, please
          contact us at <a href="mailto:zeetem2000@gmail.com" className="text-pink-500">zeetem2000@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be reflected on this page with the updated date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions about our privacy practices, please reach out to us at{" "}
          <a href="mailto:zeetem2000@gmail.com" className="text-pink-500">zeetem2000@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
