
const express = require('express');
const { Client } = require('pg');

const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));

const client = new Client({
  user: 'postgres',
  password: '1111',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});



app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  res.send('Form submitted!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

client.connect()
.then(() => console.log("Connected"))
.then(() => client.query("select * from history"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())


app.post('/submit-form', (req, res) => {
  console.log(req.body); // Додано для перевірки даних з форми

  const { textInput } = req.body;

  const query = 'INSERT INTO history (keyword) VALUES ($1)';
  const values = [textInput];

  client.query(query, values)
    .then(() => {
      res.send('Data inserted successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error inserting data');
    });
});



