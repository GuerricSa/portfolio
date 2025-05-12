import { useEffect, useRef, useState } from 'react';
import './hero-text-n-media.scss';
import portraitImage from '../../images/portrait_guerric.webp';

export default function HeroTextNMedia() {
  const sectionRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;

      const ratio = (sectionCenter - screenCenter) / (windowHeight / 2);

      const clampedRatio = Math.max(-1, Math.min(1,ratio));

      const angle = clampedRatio * 5;

      setRotation(angle)
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="main-content"
      className='container transition-transform duration-300 ease-out justify-between flex flex-col items-center lg:flex-row gap-14 py-10 lg:py-28'
    >
      <div className='flex items-center'>
        <h1 className='text-center lg:text-left lg:max-w-xl'>
          Hello,
          <br />
          Bienvenue sur le Portfolio de
          <br />
          <span className='text-tertiary'>Guerric SANT</span>
        </h1>
      </div>
      <img
        className='w-[25rem] rounded-md'
        src={portraitImage}
        alt='Portrait de Guerric SANT'
        width="400"
        height="540"
        loading="eager"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </section>
  )
}
