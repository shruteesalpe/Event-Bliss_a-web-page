const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'contact_form_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for parsing application/json
app.use(bodyParser.json());

// Route for handling form submission
app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;
    const formData = { name, email, subject, message };

    connection.query('INSERT INTO form_entries SET ?', formData, (err, result) => {
        if (err) {
            res.status(500).send('Error saving form data');
            throw err;
        }
        res.status(200).send('Form data saved successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
