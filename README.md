# Book API 📚

This is a simple RESTful API built with **Node.js** and **Express** for managing books and their details. The API allows you to perform CRUD operations on books and their associated details, as well as retrieve your student number.

## Features

- Get your student number (`/whoami`)
- List all books (`/books`)
- Get a single book by ID (`/books/:id`)
- Add a new book (`POST /books`)
- Update a book’s title (`PUT /books/:id`)
- Delete a book (`DELETE /books/:id`)
- Add details to a book (`POST /books/:id/details`)
- Delete a book detail (`DELETE /books/:id/details/:detailId`)

## Example Data

```json
{
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
}
