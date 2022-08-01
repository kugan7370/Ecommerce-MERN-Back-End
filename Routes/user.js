import express from "express";
import { addBasket, getBasket, removebasket } from "../Controller/user.js";
import { verifyUser } from "../Middleware/VarifyUser.js";

const router = express.Router()


//routes
router.put('/addbasket/:id', verifyUser, addBasket)
router.get('/getcartproduct', verifyUser, getBasket)
router.delete('/removebasket/:id', verifyUser, removebasket)



export default router;