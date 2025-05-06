import { sendEmail } from "../utils/mailer.js";

export const handleContactForm = async (req, res) => {
  const { name, email, message, answers } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    await sendEmail({ name, email, message, answers })

    res.status(200).json({ success: 'Message bien reçu !' });
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire :', error);
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
};
