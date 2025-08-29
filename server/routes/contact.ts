import { Router } from 'express';
import Contact from '../models/Contact';
import { sendEmails } from '../utils/sendEmail';

const router = Router();

router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    await sendEmails({
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      email: newContact.email,
      phoneNumber: newContact.phoneNumber,
      serviceInterestedIn: newContact.serviceInterestedIn,
      preferredDate: newContact.preferredDate,
      preferredTime: newContact.preferredTime,
      message: newContact.message
    });
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
});

export default router;
