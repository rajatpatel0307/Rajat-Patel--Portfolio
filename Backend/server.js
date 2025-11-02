require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== Debug Route =====
app.get("/debug-env", (req, res) => {
  res.json({
    EMAIL_USER: process.env.EMAIL_USER ? "✅ Loaded" : "❌ Missing",
    EMAIL_PASS: process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Missing",
    NODE_ENV: process.env.NODE_ENV || "development",
  });
});

// ===== Health Check =====
app.get("/", (req, res) => {
  res.send("✅ Backend is running fine on Render!");
});

// ===== Mail Transporter =====
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for 587
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Transporter verification failed:", error.message);
  } else {
    console.log("✅ Gmail transporter ready to send emails.");
  }
});

// ===== Contact Route =====
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    console.log("📨 Sending emails...");
    console.log("From:", email);
    console.log("To (internal):", process.env.EMAIL_USER);

    // Internal mail
    const internalMail = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Auto-reply mail
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

    await Promise.all([
      transporter.sendMail(internalMail),
      transporter.sendMail(autoReply),
    ]);

    console.log("✅ Both emails sent successfully!");
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Mail send error:", error);
    res.status(500).json({
      message: "Failed to send email",
      error: error.message,
    });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
