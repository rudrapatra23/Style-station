import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  serviceInterestedIn: { type: String, required: true },
  preferredDate: { type: Date, required: false },
  preferredTime: { type: String, required: false },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

const Contact = model('Contact', ContactSchema);
export default Contact;
