import { sendEmail } from "../../utils/sendEmail"; // Optional (see Step 3)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // (Optional) Send email
    await sendEmail({
      to: 'your@email.com',
      subject: `New message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}