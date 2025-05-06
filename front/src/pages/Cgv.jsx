import ContactBanner from '../components/contact-banner/contact-banner';
import AnchorNText from '../components/anchor-n-text/AnchorNText';
import ScrollObserver from "../components/scroll-observer/ScrollObserver";
import ScrollToTopOnPathChange from '../components/scroll-to-top/Scroll-to-top';

export default function Cgv() {
  return (
    <>
      <ScrollToTopOnPathChange />
      <ScrollObserver />
      <AnchorNText />
      <ContactBanner />
    </>
  )
}
