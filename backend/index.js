const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", function(req, res){
    return res.json("hello");
})

app.listen(PORT, () => {
    console.log(`Server start port:${PORT}`)
});