const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log(`Successfully connected on port 3000`);
});

app.get("/object", (req, res) => {
    res.send(
        {
            name: "Crypto",
            year: 2020
        }
    );
})

app.get("/array", (req, res) => {
    res.send(
        ["BNB", "ETH", "SOL"]
    )
});

app.get("/json", (req, res) => {
    res.send({
        name: "Crypto",
        year: 2025
    })
});

app.get("/redirect", (req, res) => {
    res.redirect("https://google.com")
});

// download the pdf file
app.get("/download", (req, res) => {
    res.download("./exchangelist.pdf")
});

// http://localhost:3000/user/10
app.get("/user/:id", (req, res) => {
    res.send(req.params);
});

// http://localhost:3000/search?name=John
app.get('/search', (req, res) => {
    res.send(req.query);
});

app.get('/error', (req, res) => {
    res.sendStatus(404); // Not Found
    // 200 = Ok
    // 500 = Internal Server Error
    // 503 = Service Unavailable
    // 504 = Gateway Timeout
});
