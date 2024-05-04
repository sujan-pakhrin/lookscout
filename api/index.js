import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoute from './routes/contact.route.js'
const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connected to mongodb')
    } catch (error) {
        throw error;
    }
}
app.use(express.json())
app.use('/api/contact', contactRoute)

app.listen(3000, () => {
    connect()
    console.log('listening on 300!!')
}) 