const fs = require('fs');
const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gj6658gj',
    database: 'ISL'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');

    // Read countries.json
    fs.readFile('countries.json', 'utf8', (err, data) => {
        if (err) throw err;

        const countries = JSON.parse(data);

        // Insert each country into the database
        for (let code in countries) {
            let fullName = countries[code];

            let query = "INSERT INTO country (code, full_name) VALUES (?, ?)";
            connection.query(query, [code, fullName], (err, result) => {
                if (err) throw err;
                console.log(`Inserted ${fullName} into the database.`);
            });
        }
    });
});
