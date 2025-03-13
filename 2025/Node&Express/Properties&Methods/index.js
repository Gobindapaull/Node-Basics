// ExpressJS Request Properties & Methods

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log(`Successfully connected on port 3000`);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/about", (req, res) => {
    
    // res.send(req.hostname); // localhost
    // res.send(req.ip); // ::1
    // res.send(req.ips); // []
    // res.send(req.method); // GET
    // res.send(req.originalUrl); // /about
    // res.send(req.path); // /about
    // res.send(req.protocol); // http
    // res.send(req.secure); // false // https = true
    // res.send(req.route);
    // res.send(req.headers);
    

});

app.post("/postcall", (req, res) => {
    res.send(req.body);
});
