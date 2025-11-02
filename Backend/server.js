require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Includes body parser for JSON

// Reuse transporter instead of creating it every request
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Send to yourself
    const internalMail = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    };

    // Auto-response to sender
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for Reaching Out! Let’s Stay Connected ✨",
      text: `Hi ${name},

Thank you for reaching out through my portfolio website — I truly appreciate your interest!

You can explore more about my work, skills, and featured projects from my portfolio.

If you have any questions, collaboration ideas, or would like to discuss an opportunity, feel free to reply to this email. I'd love to hear from you!

Looking forward to staying in touch.

Warm regards,  
Rajat Patel  
📧 rajat03patel@gmail.com`,
    };

    // Send both emails concurrently for speed
    await Promise.all([
      transporter.sendMail(internalMail),
      transporter.sendMail(autoReply),
    ]);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('❌ Mail send error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});