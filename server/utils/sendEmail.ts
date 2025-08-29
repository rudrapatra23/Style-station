import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // or false depending on SMTP settings
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendEmails(contact: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  serviceInterestedIn: string;
  preferredDate?: Date;
  preferredTime?: string;
  message?: string;
}) {
  const fullName = `${contact.firstName} ${contact.lastName}`;
  const formattedDate = contact.preferredDate ? contact.preferredDate.toDateString() : 'Not specified';

  // Email to client
  await transporter.sendMail({
    from: `"Your Site" <${process.env.EMAIL_USER}>`,
    to: contact.email,
    subject: 'Thanks for contacting us!',
    text: `Hi ${fullName},\n\nThank you for reaching out regarding our services.\n\nHere is a summary of your request:\nService Interested In: ${contact.serviceInterestedIn}\nPreferred Date: ${formattedDate}\nPreferred Time: ${contact.preferredTime || 'Not specified'}\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company`,
  });

  // Email to admin
  await transporter.sendMail({
    from: `"Your Site" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Contact Form Submission',
    text: `New contact form submission details:\n\nName: ${fullName}\nEmail: ${contact.email}\nPhone: ${contact.phoneNumber || 'Not provided'}\nService Interested In: ${contact.serviceInterestedIn}\nPreferred Date: ${formattedDate}\nPreferred Time: ${contact.preferredTime || 'Not specified'}\nMessage: ${contact.message || 'No message provided'}`
  });
}
