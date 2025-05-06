import React from 'react';
import HeroTextNMedia from '../components/hero-text-n-media/hero-text-n-media';
import Skills from '../components/skills/skills';
import Offers from '../components/offers/offers';
import Works from '../components/works/works'
import Experiences from '../components/experiences/experiences';
import ContactBanner from '../components/contact-banner/contact-banner';
import ScrollObserver from "../components/scroll-observer/ScrollObserver";
import ScrollToTopOnPathChange from '../components/scroll-to-top/Scroll-to-top';

function Home() {
  return (
    <>
      <ScrollToTopOnPathChange />
      <ScrollObserver />
      <HeroTextNMedia />
      <Skills />
      <Offers />
      <Works />
      <Experiences />
      <ContactBanner />
    </>
  )
}

export default Home;
