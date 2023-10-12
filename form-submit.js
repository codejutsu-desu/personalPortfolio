const nodemailer = require("nodemailer");

const sendEmailHandler = async (req, res) => {
  if (req.method === "POST") {
    // Set the CORS headers to allow requests from your frontend
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://shimanto-portfolio.vercel.app"
    ); // Replace with your frontend URL
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.body) {
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
      res.status(400).json({ message: "Bad Request: Missing request body" });
    }
  } else {
    res.status(405).end();
  }
};

export default sendEmailHandler;
