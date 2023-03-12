import express from "express"
import { postLogin, postRegister } from "../controllers/auth/authController.js"
import joi from "joi"
import validator from "express-joi-validation"
import { protect } from "../middleware/authMiddleware.js"

const validators = validator.createValidator({})
const router = express.Router()

const registerSchema = joi.object({
    username: joi.string().min(3).max(12).required(),
    password: joi.string().min(6).max(12).required(),
    mail: joi.string().email().required()
})

const loginSchema = joi.object({
    password: joi.string().min(6).max(12).required(),
    mail: joi.string().email().required()
})

router.get("/",(req,res)=>{
    console.log("helloo from route")
    res.send("hello route")
})

router.post("/login",validators.body(loginSchema),postLogin)
router.post("/register",validators.body(registerSchema),postRegister)
router.get("/test",protect,(req,res)=>{
    res.send("It works!!!")
})
export default router