const express = require('express');
const router = express.Router();
const { getDb } = require('../db');

router.get('/', (req, res) => {
  const db = getDb();

  db.all('SELECT * FROM products ORDER BY id DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to fetch products', error: err.message });
    }

    res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  const db = getDb();
  const { id } = req.params;

  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to fetch product', error: err.message });
    }

    if (!row) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(row);
  });
});

router.post('/', (req, res) => {
  const db = getDb();
  const { name, category, description, price, stock, image } = req.body;

  if (!name || !category || !price) {
    return res.status(400).json({ message: 'Name, category, and price are required' });
  }

  const sql = `
    INSERT INTO products (name, category, description, price, stock, image)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [name, category, description || '', Number(price), Number(stock || 0), image || ''], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to add product', error: err.message });
    }

    res.status(201).json({
      id: this.lastID,
      message: 'Product added successfully'
    });
  });
});

router.put('/:id', (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const { name, category, description, price, stock, image } = req.body;

  db.run(
    `
      UPDATE products
      SET name = ?, category = ?, description = ?, price = ?, stock = ?, image = ?
      WHERE id = ?
    `,
    [name, category, description || '', Number(price), Number(stock || 0), image || '', id],
    function (err) {
      if (err) {
        return res.status(500).json({ message: 'Failed to update product', error: err.message });
      }

      if (this.changes === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ message: 'Product updated successfully' });
    }
  );
});

router.delete('/:id', (req, res) => {
  const db = getDb();
  const { id } = req.params;

  db.run('DELETE FROM products WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to delete product', error: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  });
});

module.exports = router;
