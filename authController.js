const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

async function login(req, res) {
    try {
        const { name, password } = req.body
    } catch (error) {
        res.json({
            error: error.message
        })
    }
}

async function register(req, res) {
    try {
        const { name, phone, email, password } = req.body
        if (!name || !email || !password) {
            return res.json({ message: "All fields required" })
        }
        if (typeof password !== "string") {
            return res.json({ message: "Password must be string" })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.json({ message: "User already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({ name, phone, email, password: hashedPassword })
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        res.json({
            message: "Registration success",
            token
        })

    } catch (error) {
        res.json({
            error: error.message
        })
    }
}

module.exports = { login, register }
