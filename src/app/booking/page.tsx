import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, PhoneIcon, MailIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Book Your Mobile Tyre Fitting | RMS Tyres",
  description: "Book your mobile tyre fitting service online. Same-day service available across the UK. Professional fitters, competitive prices, 12-month warranty.",
  openGraph: {
    title: "Book Your Mobile Tyre Fitting | RMS Tyres",
    description: "Book your mobile tyre fitting service online. Same-day service available across the UK.",
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to home */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Book Your Mobile Tyre Fitting
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your tyres fitted at your location. Professional service, competitive prices, same-day availability.
          </p>
        </div>

        {/* Booking System Placeholder */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Booking System Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              Our online booking system is currently being developed. In the meantime, 
              please contact us directly to book your mobile tyre fitting service.
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="tel:07932030303"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors min-h-[44px]"
                aria-label="Call RMS Tyres Mobile Fitting"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 07932 030303
              </a>
              
              <a
                href="mailto:info@rmstyres.co.uk"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 bg-white text-red-600 border-2 border-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors min-h-[44px]"
                aria-label="Email RMS Tyres Mobile Fitting"
              >
                <MailIcon className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Service Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What to Expect
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Professional mobile tyre fitting service</li>
              <li>• Same-day availability (subject to location)</li>
              <li>• Competitive pricing on all tyre brands</li>
              <li>• 12-month warranty on all work</li>
              <li>• Fully qualified and insured technicians</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• London and surrounding areas</li>
              <li>• 25-mile radius from our base</li>
              <li>• Emergency callouts available</li>
              <li>• Weekend and evening appointments</li>
              <li>• Commercial vehicle services</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
