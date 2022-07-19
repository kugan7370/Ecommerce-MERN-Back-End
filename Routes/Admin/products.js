import express from "express";
import { addproduct, getproduct } from "../../Controller/Admin/product.js";

const router = express.Router()



router.post('/addproduct', addproduct)
router.get('/getproduct', getproduct)

export default router;