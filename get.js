const delbook = require("./db");
const express = require("express");
const router = express.Router();
router.get("/books", async (req, res) => {
    try {
      const allBooks = await delbook.query("SELECT * FROM books");
      res.json(allBooks.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  module.exports = router;