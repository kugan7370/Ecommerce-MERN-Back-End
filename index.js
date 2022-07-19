import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'


const app = express();
dotenv.config();

//db connection
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


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8080, () => {
    connect();
    console.log("Connected to backend.")
})