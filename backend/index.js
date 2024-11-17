const express = require("express");
const {createBook, getAllBooks, getBookDetail, updateBook, deleteBook} = require("./controllers/BookController");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// app.get("/", function(req, res){
//     const {body, params, query} = req;
//     return res.json(query.id);
// })

app.get("/", function(req, res){
    res.send("welcome API ver 1.0")
})

app.get("/api/buku", getAllBooks);
app.post("/api/buku", createBook);
app.post("/api/buku/:id", getBookDetail);
app.delete("/api/buku/:id", deleteBook);
app.put("/api/buku/:id", updateBook);

app.listen(PORT, () => {
    console.log(`Server start port:${PORT}`)
});