import React from 'react';
import ContactBanner from '../components/contact-banner/contact-banner';
import Calculator from '../components/calculator/Calculator';
import ScrollObserver from "../components/scroll-observer/ScrollObserver";
import ScrollToTopOnPathChange from '../components/scroll-to-top/Scroll-to-top';

function Estimate() {
  return (
    <>
      <ScrollToTopOnPathChange />
      <ScrollObserver />
      <Calculator />
      <ContactBanner />
    </>
  )
}

export default Estimate;
