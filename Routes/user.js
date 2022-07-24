import express from "express";
import { addBasket, removeBasket } from "../Controller/user.js";
import { verifyUser } from "../Middleware/VarifyUser.js";

const router = express.Router()


//routes
router.put('/addbasket/:id', verifyUser, addBasket)
// router.put('/multiaddbasket/:id', verifyUser, multiAddBasket)
router.put('/removebasket/:id', verifyUser, removeBasket)

export default router;