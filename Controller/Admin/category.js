import category from "../../models/category.js"

export const addCategory = async (req, res, next) => {
    try {
        const add_category = new category({ ...req.body })
        await add_category.save()
        return res.status(200).json('Sucessfully Added')

    } catch (error) {
        next(error)
    }
}



export const getCategory = async (req, res, next) => {
    try {
        const get_Category = await category.find()
        return res.status(200).json(get_Category)

    } catch (error) {
        next(error)
    }
}