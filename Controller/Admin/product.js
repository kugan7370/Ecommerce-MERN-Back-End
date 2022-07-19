import Products from "../../models/Products.js"



export const addproduct = async (req, res, next) => {
    try {
        const add_product = new Products({ ...req.body })
        await add_product.save()
        return res.status(200).json('Sucessfully Added')

    } catch (error) {
        next(error)
    }
}



export const getproduct = async (req, res, next) => {
    try {
        const get_product = await Products.find()
        return res.status(200).json(get_product)

    } catch (error) {
        next(error)
    }
}