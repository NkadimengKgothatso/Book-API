// server.js
const express = require('express');
const app = express();
const PORT = 3000;



app.use(express.json());



let books = [{
  "id": "2",
  "title": "Animal Farm",
  "details": [
    {
      "id": "1",
      "author": "George Orwell",
      "genre": "Dystopian",
      "publicationYear": 1949
    }
  ]
}];

let stuNo = [{ studentNumber: "2840850" }];


app.get("/whoami", (req, res) => {
    res.status(200).json(stuNo);
});


app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);
    if (!book) return res.status(404).json({  "error": "Book not found" });
    res.status(200).json(book);
});


app.post("/books", (req, res) => {
    const { id, title, details } = req.body;

    if (!id || !title || !details) {
        return res.status(400).json({ "error": "Missing required fields" });
    }

    
    const newBook = { id, title, details };
    books.push(newBook);

    res.status(201).json(newBook);
});


app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const { title } = req.body;
    const book = books.find(b => b.id === bookId);

    if (!book) return res.status(404).json({ "error": "Book not found" });

    if (title) book.title = title;
    res.status(200).json(book);
});


app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex(b => b.id === bookId);

    if (index === -1) return res.status(404).json({   "error": "Book not found" });

    books.splice(index, 1);
    res.status(204).send();
});


app.post("/books/:id/details", (req, res) => {
    const bookId = req.params.id;
    const { id, author, genre, publicationYear } = req.body;
    const book = books.find(b => b.id === bookId);

    if (!book) return res.status(404).json({  "error": "Book not found"});
    
    

    const newDetail = { id, author, genre, publicationYear };
    book.details.push(newDetail);
    res.status(201).json(book);
});


app.delete("/books/:id/details/:detailId", (req, res) => {
    const bookId = req.params.id;
    const detailId = req.params.detailId;
    const book = books.find(b => b.id === bookId);

    if (!book) return res.status(404).json({ error: "Book or detail not found" });

    const detailIndex = book.details.findIndex(d => d.id === detailId);
    if (detailIndex === -1) return res.status(404).json({ error: "Book or detail not found" });

    book.details.splice(detailIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});