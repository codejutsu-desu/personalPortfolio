const nodemailer = require("nodemailer");

const sendEmailHandler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail
      auth: {
        user: "haquemrimmoyka@gmail.com",
        pass: "doppelganger123@",
      },
    });

    // Email content
    const mailOptions = {
      from: "haquemrimmoyka@gmail.com",
      to: "mrimmoys@gmail.com", // Your email address where you want to receive messages
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Email sending failed" });
    }
  } else {
    res.status(405).end();
  }
};

export default sendEmailHandler;
