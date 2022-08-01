import Cart from "../models/Cart.js"
import user from "../models/user.js"

//addto basket

export const addBasket = async (req, res, next) => {

    try {
        const items = await Cart.findOne({ userId: req.user._id, productId: req.params.id })
        if (items) {
            const add_Basket = await Cart.findOneAndUpdate({
                userId: req.user._id, productId: req.params.id
            }, {
                $set: {
                    productId: req.params.id,
                    quantity: req.body.quantityCount,
                }
            })
            res.status(200).json('products has beed updated to basket')

        }

        else {
            const add_Basket = new Cart({
                userId: req.user._id,
                quantity: req.body.quantityCount,
                productId: req.params.id
            })
            await add_Basket.save()
            res.status(200).json('products has beed added to basket')
        }
    } catch (error) {
        next(error)
    }
}


export const getBasket = async (req, res, next) => {

    try {
        const get_Basket = await Cart.find({ userId: req.user._id })
        res.status(200).json(get_Basket)

    } catch (error) {
        next(error)
    }
}

export const removebasket = async (req, res, next) => {

    try {
        const remove_basket = await Cart.deleteOne({ userId: req.user._id, productId: req.params.id })
        res.status(200).json("item has been removed")

    } catch (error) {
        next(error)
    }
}






