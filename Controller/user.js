import user from "../models/user.js"

//addto basket

export const addBasket = async (req, res, next) => {

    try {
        const add_basket = await user.findByIdAndUpdate(req.user._id, {
            $addToSet: { product_id: req.params.id }
        })

        res.status(200).json('products has beed added to basket')
    } catch (error) {
        next(error)
    }

}
export const removeBasket = async (req, res, next) => {

    try {
        const remove_Basket = await user.findByIdAndUpdate(req.user._id, {
            $pull: { product_id: req.params.id }
        })

        res.status(200).json('products has beed removed from basket')
    } catch (error) {
        next(error)
    }

}


