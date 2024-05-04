import Contact from '../models/contact.js';

export const createContact = async (req, res) => {
    const newContact = new Contact(req.body);
    try {
        const savedContact = await newContact.save();
        res.status(200).json("Form Add Sucessfully!!");
    } catch (err) {
        res.status(500).json(err);
    }
};