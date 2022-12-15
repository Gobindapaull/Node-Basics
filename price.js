const express = require("express");
const app = express();

// object route
app.get("/object", (req, res) => {
  res.send({
    message: "ok",
  });
});
// home route
app.get("/", (req, res) => {
  res.send("Homepage");
});
// products route
app.get("/products", (req, res) => {
  res.send([
    {
      name: "ETH",
      price: 1500,
      category: "Crypto",
      buy: true,
    },
  ]);
});

app.listen(3000, () => {
  console.log("app running at port 3000");
});
