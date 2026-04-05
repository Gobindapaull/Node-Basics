- ctrl + r = reload

- config/db.js
- await mongoose.connect(process.env.MONGO_URI)

- models/user_model.js
- const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
}, {
    timestamps: true
})
- const User = mongoose.model("User", userSchema)

- controllers/authController.js
- login()
- const isMatch = bcrypt.compare(String(password), user.password)
- register()
- const salt = await bcrypt.genSalt(10)
- const hashedPassword = await bcrypt.hash(String(password), salt)

- routes/authRoutes.js
