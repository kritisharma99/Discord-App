import User from "../../models/userModel.js"
import generateToken from "../../utils/generateToken.js"

/*********************************************
 * @desc Register user
 * @route POST /api/auth/register
 * @access Public
 ********************************************/
const postRegister = async(req,res) =>{
    const { username, mail, password }=req.body

    const userExists = await User.findOne({mail:mail})

    if(userExists){
        res.status(401)
        throw new Error("User already registerd!")

    }
    const user = await User.create({
        mail,
        username,
        password
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            username: user.username,
            mail:user.mail,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid User data")
    }
} 
/*********************************************
 * @desc Login user
 * @route POST /api/auth/login
 * @access Public
 ********************************************/
const postLogin = async(req,res) =>{
    const { mail, password }=req.body

    const user = await User.findOne({mail:mail})

    if(user && (await user.matchPassword(password))){
        //matching the passwrord
        res.json({
            _id:user._id,
            username: user.username,
            mail:user.mail,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(401).send("Invalid email 0r password")
        throw new Error("Invalid email 0r password")
    }
    // res.send({
    //     mail,
    //     password
    // })
} 


export {
    postRegister,
    postLogin
}