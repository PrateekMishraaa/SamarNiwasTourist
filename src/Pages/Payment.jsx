import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Payment = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full flex justify-center items-center p-4">
        <div className="w-full max-w-6xl  p-6 flex flex-col md:flex-row gap-6">
          {/* Bank Details Section */}
          <div className="w-full md:w-3/5  p-4">
            <p className="text-2xl md:text-3xl font-semibold font-serif text-center md:text-left">
              Bank Account <span className="text-red-600">Details</span>
            </p>
            <p className="text-sm text-gray-700 font-serif p-4 font-semibold">
              <span className="text-red-600">IMPORTANT NOTICE:</span> Payments should only be made using the official account number and scanner provided above. We do not accept cash deposits or physical payments in any form. The company is not responsible for any payments made to other accounts, other scanners, or any cash given to individuals. Please ensure all payments are directed through the official account and scanner only.
            </p>
            <div className="h-40 w-full border-2 flex justify-center items-center bg-gray-100">
              <p>Bank Details 1</p>
            </div>
            <div className="h-40 w-full border-2 flex justify-center items-center bg-gray-100 mt-4">
              <p>Bank Details 2</p>
            </div>
          </div>
          {/* Payment QR Section */}
          <div className="w-full md:w-2/5 border-2 flex justify-center items-center p-4 bg-gray-100">
            <p>QR Code / Payment Methods</p>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Payment;
