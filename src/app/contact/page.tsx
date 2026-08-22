import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
export const metadata = {
  title: "Contact Us | ErgoWellness",
  description: "Get in touch with the ErgoWellness support team. We're here to help you live a pain-free life.",
};

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-brand-primary p-10 text-center">
            <h1 className="text-3xl font-extrabold text-white mb-2">Get in Touch</h1>
            <p className="text-blue-100">We're here to help you live pain-free.</p>
          </div>
          
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Have a question about an order, our products, or need advice on improving your desk setup? Our ergonomic specialists are standing by.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-brand-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div className="ml-4">
                      <p className="font-bold text-slate-900">Email Us</p>
                      <p className="text-slate-600 text-sm">support@getergowellness.com</p>
                      <p className="text-slate-400 text-xs mt-1">We aim to reply within 24 hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-6">
                    <svg className="w-6 h-6 text-brand-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="ml-4">
                      <p className="font-bold text-slate-900">Business Hours</p>
                      <p className="text-slate-600 text-sm">Monday - Friday</p>
                      <p className="text-slate-600 text-sm">9:00 AM - 5:00 PM (EST)</p>
                    </div>
                  </div>

                  <div className="flex items-start mt-6">
                    <svg className="w-6 h-6 text-brand-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div className="ml-4">
                      <p className="font-bold text-slate-900">Phone Number</p>
                      <p className="text-slate-600 text-sm">+1 (800) 555-0199</p>
                    </div>
                  </div>

                  <div className="flex items-start mt-6">
                    <svg className="w-6 h-6 text-brand-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div className="ml-4">
                      <p className="font-bold text-slate-900">Business Address</p>
                      <p className="text-slate-600 text-sm">ErgoWellness Inc.</p>
                      <p className="text-slate-600 text-sm">1209 Orange Street</p>
                      <p className="text-slate-600 text-sm">Wilmington, DE 19801, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
