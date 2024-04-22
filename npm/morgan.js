const morgan = require("morgan")
const express = require("express")

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.listen(port, () => console.log(`App listening on port ${port}`))
