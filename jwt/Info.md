const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)
const user = await User.create({ name, phone, email, password: hashedPassword })
const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
