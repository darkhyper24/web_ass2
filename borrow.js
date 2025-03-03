const delbook = require("./db");
const express = require("express");
const router = express.Router();
const pool = require("./db");

router.put("/books/:id/borrow", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE books SET available = FALSE WHERE id = $1 AND available = TRUE RETURNING *;",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Book not found or already borrowed" });
    }

    res.json({ message: "Book borrowed successfully", book: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

  module.exports = router;