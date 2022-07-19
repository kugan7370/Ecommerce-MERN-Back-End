import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from 'dotenv'

export const register = async (req, res) => {
    const { username, email, Password, ConfirmPassword } = req.body;


    // check if already email available or not
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return res.status(400).json({
            error: 'user Already exits'
        })
    }
    else {

        if (Password !== ConfirmPassword) {

            return res.status(400).json({
                error: 'passwords should be same'
            })
        }
        else {

            //change passwor dinto hash password
            const hashPassword = await bcrypt.hashSync(Password, 10);



            //save into variable
            const _user = new User({
                username,
                email,
                Password: hashPassword,

            })

            // save data into database
            const result = await _user.save()
            if (!result) {
                return res.status(400).json({
                    error: 'message is something wrong'
                })
            }
            else {
                return res.status(201).json({
                    message: 'user created successfully'
                })
            }
        }

    }

}




export const login = async (req, res) => {
    const { email, Password } = req.body;

    const getUser = await User.findOne({ email })

    if (!getUser) {
        return res.status(400).json({ message: 'invalid email' });

    }
    else {
        const isPasswordCorrect = await bcrypt.compare(Password, getUser.Password)
        if (isPasswordCorrect) {
            const token = jwt.sign({ _id: getUser._id }, 'Ecommerce', { expiresIn: '1h' });
            const { username, email } = getUser;
            res.status(201).json({
                token,
                user: {
                    username,
                    email,


                }
            })
        }
        else {
            return res.status(400).json({
                message: 'invalid password'
            })
        }


    }
}