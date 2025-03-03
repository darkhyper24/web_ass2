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

  router.get("/books/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const allBooks = await delbook.query("SELECT * FROM books where id = $1", [id]);
      res.json(allBooks.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  module.exports = router;