require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Email Server Running");
});

// 📨 Contact route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.warn("⚠️ Missing fields:", { name, email, message });
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    console.log("📩 Setting up Gmail transporter...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // ✅ TLS port
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("✅ Verifying transporter...");
    await transporter.verify();
    console.log("📨 Gmail transporter verified.");

    // 🔔 Send email to portfolio owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 New message from ${name}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    });

    // 🤖 Auto-reply to sender
    await transporter.sendMail({
      from: `"Rajat Patel" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out! 🙌",
      text: `Hi ${name},

Thank you for contacting me through my portfolio site!

I've received your message:
"${message}"

I’ll review it and get back to you shortly.

Warm regards,
Rajat Patel`,
    });

    console.log("✅ Both emails sent successfully");
    res.status(200).json({ success: true, message: "Emails sent successfully" });

  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    res.status(500).json({ error: "Failed to send emails", details: error.message });
  }
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
