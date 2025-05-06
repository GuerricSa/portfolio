import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm({onClose}) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5050/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, token}),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMsg(data.success);
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
    >
    <div
      className="bg-white p-6 rounded-xl w-full max-w-lg relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">✕</button>
      <h2 className="text-xl font-bold mb-4 text-primary">Me contacter</h2>
      <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" className="w-full border p-2 rounded" required onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Votre email" className="w-full border p-2 rounded" required  onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Votre message" className="w-full border p-2 rounded h-32" required onChange={handleChange} value={formData.message} />
        <ReCAPTCHA
          sitekey="6LdGaSkrAAAAACNZDvPmbsTJXtoKGn2kYC-97EvC"
          onChange={setToken}
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">Envoyer</button>
        {responseMsg && <p>{responseMsg}</p>}
      </form>
    </div>
  </div>
  );
}
