const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log(`Successfully connected on port 3000`);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})

// http://localhost:3000/user/10
app.get("/user/:id", (req, res) => {
    res.send(req.params);
});
