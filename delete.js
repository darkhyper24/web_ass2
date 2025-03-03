const delbook = require("./db");
const express = require("express");
const router = express.Router();
router.delete("/books/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const book = await delbook.query("DELETE FROM books WHERE id = $1", [id]);
      res.json("Book was deleted");
    } catch (err) {
      console.error(err.message);
    }
  });
  module.exports = router;