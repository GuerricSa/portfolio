import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message, answers = null }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let answersContent = '';

  if (answers) {
    const parsedAnswers = typeof answers === 'string' ? JSON.parse(answers) : answers;

    answersContent = Object.entries(parsedAnswers)
      .map(([question, answer]) => {
        const formattedAnswer = Array.isArray(answer)
          ? answer.join(', ')
          : answer;

        return `<p><strong>${question}:</strong> ${formattedAnswer}</p>`;
      })
      .join('');
  }


  const mailOptions = {
    from: email,
    to: process.env.MAIL_RECEIVER,
    subject: 'Nouveau message depuis ton portfolio',
    html: `
      <h1>Message reçu</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      ${answersContent ? `<h2>Réponses à la calculatrice :</h2>${answersContent}` : ''}
    `,
  };

  await transporter.sendMail(mailOptions);
};
