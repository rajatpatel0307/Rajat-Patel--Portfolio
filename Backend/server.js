require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// 🧩 Debug: Log environment variable presence (not values)
console.log("🧩 Environment check:");
console.log({
  EMAIL_USER_SET: !!process.env.EMAIL_USER,
  EMAIL_PASS_SET: !!process.env.EMAIL_PASS,
  NODE_ENV: process.env.NODE_ENV,
});

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Email Server Running");
});

// ✅ Environment test route
app.get("/debug-env", (req, res) => {
  res.json({
    EMAIL_USER: process.env.EMAIL_USER ? "✅ Set" : "❌ Missing",
    EMAIL_PASS: process.env.EMAIL_PASS ? "✅ Set" : "❌ Missing",
  });
});

// 📨 Contact route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("📨 Incoming contact request:", { name, email, message });

  if (!name || !email || !message) {
    console.warn("⚠️ Missing fields:", { name, email, message });
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    console.log("📩 Setting up Gmail transporter...");
    console.log("👀 Using EMAIL_USER:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true, // ✅ nodemailer debug logs
      debug: true,  // ✅ more verbose output
    });

    // 🧠 Check if transporter is configured
    console.log("🔍 Verifying transporter...");
    await transporter.verify();
    console.log("✅ Transporter verified successfully.");

    // 🔔 Send email to portfolio owner
    console.log("📤 Sending main email to:", process.env.EMAIL_USER);
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

    // 🤖 Send auto-reply
    console.log("📤 Sending auto-reply to:", email);
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

    console.log("✅ Both emails sent successfully!");
    res.status(200).json({ success: true, message: "Emails sent successfully" });

  } catch (error) {
    console.error("❌ Email sending failed:");
    console.error("🧠 Error name:", error.name);
    console.error("💬 Message:", error.message);
    console.error("📜 Stack:", error.stack);

    res.status(500).json({
      error: "Failed to send emails",
      details: error.message,
    });
  }
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}/debug-env to check env vars`);
});
