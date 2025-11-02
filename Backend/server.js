require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", async(req,res)=>{
  res.send("Running on localhost 5000");
})

// Contact Route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.warn('⚠️ Missing required fields:', { name, email, message });
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    console.log('📩 Setting up transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('🔍 Verifying email transporter...');
    await transporter.verify()
      .then(() => console.log('✅ Transporter verified successfully'))
      .catch((err) => {
        console.error('❌ Transporter verification failed:', err.message);
        throw new Error('Invalid email credentials or Gmail App Password issue');
      });

    console.log('📤 Sending message to portfolio owner...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log('📬 Sending thank-you message to client...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out – I’ll be in touch soon!',
      text: `Hi ${name},

Thank you for reaching out through my portfolio!

I’ve received your message and appreciate your interest. I’ll review your note and get back to you shortly.

In the meantime, feel free to explore more about my work and projects on my site.

Warm regards,
Rajat Patel
`,
    });

    console.log('✅ Both emails sent successfully!');
    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (err) {
    console.error('❌ Email sending error details:', err);
    res.status(500).json({
      error: 'Failed to send emails',
      details: err.message,
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
