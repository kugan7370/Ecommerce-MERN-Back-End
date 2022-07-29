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
        const get_password = await Cart.find({ userId: req.user._id })
        res.status(200).json(get_password)

    } catch (error) {
        next(error)
    }
}



// export const removeBasket = async (req, res, next) => {

//     try {
//         const items = await user.findOne({ _id: req.user._id, "cartItems.productId": req.params.id })
//         if (items) {
//             const add_basket = await user.findByIdAndUpdate(req.user._id, {
//                 "$pull": {
//                     "cartItems": {
//                         productId: req.params.id
//                     }
//                 }
//             })
//             res.status(200).json('products has beed removed from basket')
//         }




//     } catch (error) {
//         next(error)
//     }

// }

// export const multiAddBasket = async (req, res, next) => {

//     try {
//         const items = await user.findOne({ _id: req.user._id, "cartItems.productId": req.params.id })
//         if (items) {

//             const multi_AddBasket = await user.findOneAndUpdate({ _id: req.user._id, "cartItems.productId": req.params.id }, {
//                 "$inc": {
//                     "cartItems.$.quantity": 1
//                 }
//             })
//             res.status(200).json('products has beed added to basket')
//         }


//     } catch (error) {
//         next(error)
//     }

// }

// export const multiRemoveBasket = async (req, res, next) => {

//     try {
//         const items = await user.findOne({ _id: req.user._id, "cartItems.productId": req.params.id })
//         if (items) {

//             const multi_RemoveBasket = await user.findOneAndUpdate({ _id: req.user._id, "cartItems.productId": req.params.id }, {
//                 "$inc": {
//                     "cartItems.$.quantity": -1
//                 }
//             })
//             res.status(200).json('products has beed removed to basket')
//         }


//     } catch (error) {
//         next(error)
//     }

// }






