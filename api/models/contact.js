import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    touchWith: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    agree: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
