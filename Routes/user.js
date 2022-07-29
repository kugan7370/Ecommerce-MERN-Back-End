import express from "express";
import { addBasket, getBasket } from "../Controller/user.js";
import { verifyUser } from "../Middleware/VarifyUser.js";

const router = express.Router()


//routes
router.put('/addbasket/:id', verifyUser, addBasket)
router.get('/getcartproduct', verifyUser, getBasket)


export default router;