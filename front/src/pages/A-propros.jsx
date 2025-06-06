import React from 'react';
import ContactBanner from '../components/contact-banner/contact-banner';
import ScrollObserver from "../components/scroll-observer/ScrollObserver";
import ScrollToTopOnPathChange from '../components/scroll-to-top/Scroll-to-top';

export default function APropos() {
  return (
    <>
      <ScrollToTopOnPathChange />
      <ScrollObserver />
      <section className='container'>
        <div className="min-h-[60vh] flex flex-col justify-center items-center bg-gray-100 rounded-xl mx-auto max-w-xl shadow-lg p-6 mt-6">
          <h1 className="text-gray-800 mb-4 text-3xl font-bold">À propos</h1>
          <p className="text-gray-600 lg:text-lg">
            🚧 Page en cours de création 🚧
          </p>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
