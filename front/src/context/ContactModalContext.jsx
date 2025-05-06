import { createContext, useContext, useState } from 'react';
import ContactModal from '../components/contact-modal/contact-modal';

const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <ContactModal onClose={closeModal} />}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
