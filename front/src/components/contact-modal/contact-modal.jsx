import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');
  const recaptchaRef = useRef(null);
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  useEffect(() => {
    // Focus trap
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault();
            lastFocusableRef.current.focus();
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault();
            firstFocusableRef.current.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setResponseMsg('Veuillez valider le reCAPTCHA.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACK_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMsg(data.success || 'Message envoyé avec succès !');
        recaptchaRef.current.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMsg(data.error || 'Erreur inconnue.');
      }
    } catch (error) {
      setResponseMsg('Une erreur est survenue.');
      console.error(error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      ref={modalRef}
    >
      <div
        className="bg-white p-6 rounded-xl w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          aria-label="Fermer le formulaire de contact"
          ref={firstFocusableRef}
        >
          ✕
        </button>
        <h2 id="contact-modal-title" className="text-xl font-bold mb-4 text-primary">
          Me contacter
        </h2>
        <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">Votre nom</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom"
              className="w-full border p-2 rounded"
              required
              onChange={handleChange}
              value={formData.name}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Votre email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Votre email"
              className="w-full border p-2 rounded"
              required
              onChange={handleChange}
              value={formData.email}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Votre message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              className="w-full border p-2 rounded h-32"
              required
              onChange={handleChange}
              value={formData.message}
              aria-required="true"
            />
          </div>
          <div>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              ref={recaptchaRef}
              aria-label="Vérification reCAPTCHA"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
            ref={lastFocusableRef}
          >
            Envoyer
          </button>
          {responseMsg && (
            <p role="status" aria-live="polite">
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
