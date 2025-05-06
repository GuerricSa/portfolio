import { useContactModal } from '../../context/ContactModalContext';
import { PopupButton } from "react-calendly";
import './contact-banner.scss';


export default function ContactBanner() {
  const { openModal } = useContactModal();

  return (
    <section className="contact-banner py-12 bg-tertiary" id='contactBanner'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Un projet, une question ?
          </h2>
          <p className="text-primary text-lg">
            Discutons-en ensemble ! Je suis disponible pour échanger par mail ou lors d'un rendez-vous.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center mt-4 md:mt-0 flex-row md:flex-col lg:flex-nowrap lg:flex-row">
          <button
            onClick={openModal}
            className="lg:whitespace-nowrap btn-contact bg-primary text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary transition"
          >
            Me contacter
          </button>
          <div className='whitespace-nowrap btn-contact btn-calendly bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition'>
            <PopupButton
              url="https://calendly.com/guerric-sant"

              rootElement={document.getElementById("root")}
              text="Prendre rendez-vous"
              textColor="#E16C38"
              color="#222222"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
