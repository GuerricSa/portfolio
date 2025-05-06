import fetch from 'node-fetch';

export const verifyCaptcha = async (req, res, next) => {
  const token = req.body.token

  if (!token) {
    return res.status(400).json({error: 'Captcha manquant'});
  }

  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    })

    const data = await response.json();

    if (!data.success) {$
      return res.status(403).json({error: 'Échec de la vérification Captcha'});
    }

    next();
  } catch (error) {
    console.error('Erreur lors de la vérification Captcha :', error);
    res.status(500).json({ error: 'Erreur serveur lors de la vérification Captcha' });
  }
};
