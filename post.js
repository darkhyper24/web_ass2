const delbook = require("./db");
const express = require("express");
const router = express.Router();
router.post("/books", async (req, res) => {
    const { title, name, available, author } = req.body;
  
    try {
      const newBook = await delbook.query(
        "INSERT INTO books (title, name, available, author) VALUES ($1, $2, $3, $4) RETURNING *;",
        [title, name, available, author]
      );
  
      res.json(newBook.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server Error" });
    }
  });
  module.exports = router;