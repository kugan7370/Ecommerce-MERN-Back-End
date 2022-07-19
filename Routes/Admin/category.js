import express from "express";
import { addCategory, getCategory } from "../../Controller/Admin/category.js";
import { multerfile } from "../../Middleware/multer.js";

const router = express.Router()



router.post('/addcategory', addCategory)
router.get('/getcategory', getCategory)

export default router;