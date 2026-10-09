const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const databaseDir = path.join(__dirname, 'database');
const dbPath = path.join(databaseDir, 'shop.db');
const schemaPath = path.join(databaseDir, 'schema.sql');

if (!fs.existsSync(databaseDir)) {
  fs.mkdirSync(databaseDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

const initDatabase = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(schemaPath, 'utf8', (err, schema) => {
      if (err) {
        reject(err);
        return;
      }

      db.exec(schema, (execErr) => {
        if (execErr) {
          reject(execErr);
        } else {
          resolve();
        }
      });
    });
  });
};

const getDb = () => db;

module.exports = { initDatabase, getDb };
