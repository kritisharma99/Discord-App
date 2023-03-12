import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
// import asyncHandler from 'express-async-handler'

const protect = async(req,res,next) => {
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        // console.log('token found')
        try 
        {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            console.log("decoded:",decoded)
            next()
            return;
        } 
        catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized, token failed')
        }
    }
    if(!token)
    {
        res.status(401)
        throw new Error('Not Authorized, no token')

    }
    console.log(req.headers.authorization)
    next()
}


export { protect }