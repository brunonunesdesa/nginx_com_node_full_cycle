const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'db',
  user: 'myuser',
  password: 'password',
  database: 'mydatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1); 
  }
  console.log('Connected to database');
});

app.use(express.json());

app.get('/', (req, res) => {
  const user = { name: 'John Doe', email: 'john.doe@example.com' };
  const insertSql = 'INSERT INTO users SET ?';
  
  db.query(insertSql, user, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    const successMessage = 'Full Cycle Rocks!';

    const fetchSql = 'SELECT * FROM users';
    db.query(fetchSql, (fetchErr, fetchResult) => {
      if (fetchErr) {
        return res.status(500).send(fetchErr);
      }

      const insertedUser = fetchResult;
      
      res.json({ message: successMessage, insertedUser });
    });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
