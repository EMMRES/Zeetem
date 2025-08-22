import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
      
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Welcome to Zeetem. By using our website and booking services, you agree to comply with and be bound by the following terms and conditions.
      </p>

       <h2 className="text-2xl font-semibold mt-8 mb-2">Our-Policy</h2>
      <p className="mb-4">
        At Zeetem, every beauty experience is designed with care, precision, and deep respect for your time, and ours. 
        To maintain a serene, organized, and professional environment, we've put a few policies in place.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Appointments</h2>
      <p className="mb-4">
        All bookings must be confirmed with a valid reference number after payment. Late arrivals beyond 45 minutes may result in cancellation or reduced service time. 
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Booking Policy</h2>
      <p className="mb-4">
        70%-100% Deposite is required to secure your booking, if not made Appointment is not guaranteed untill the deposit is recieved 
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. No-show Policy</h2>
      <p className="mb-4">We understand that life happens but if you miss your appointment without any prior notice, it impacts our ability to serve others.
        If you miss your appointment without notifying us, your deposit will be forfeited
        
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cancellations & Rescheduling</h2>
      <p className="mb-4">
        We understand that plans can chage, cancellations on the day of your appointment will not be refunded, if you cancel  before the appointment day you will not be refunded,
        you will be allowed to reschedule once which must be 24hours before the original date
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Client Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Please arrive on time and with a clean face.</li>
        <li>Inform us of any allergies or skin conditions prior to the session.</li>
        <li>Abusive or disrespectful behavior will result in a ban from future bookings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Use of Images</h2>
      <p className="mb-4">
        Zeetem reserves the right to use images and videos taken during sessions for promotional purposes unless you request otherwise in writing.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Service Guarantee</h2>
      <p className="mb-4">
        While we ensure top-quality service, results may vary based on skin type and other factors. No refunds will be issued after a completed session.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Modifications</h2>
      <p className="mb-4">
        Zeetem reserves the right to update these terms at any time. Continued use of our services after updates means you agree to the revised terms.
      </p>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Zeetem. All rights reserved.
      </p>
    </div>
  );
}
