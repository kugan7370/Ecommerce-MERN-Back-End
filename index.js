import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'


const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Connect);
        console.log('db Connected ')
    } catch (error) {
        throw error
    }
}



//middlewares
app.use(express.json())



//routes
app.use('/api/auth', authRoute)

app.listen(8080, () => {
    connect();
    console.log("Connected to backend.")
})