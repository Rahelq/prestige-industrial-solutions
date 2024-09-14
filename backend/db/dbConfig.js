const mysql2 = require('mysql2');

// Create a connection pool using environment variables
const dbConnection = mysql2.createPool({
    user: process.env.USER,
    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    connectionLimit: 10,
});

// Print connection details for debugging
// console.log('Database configuration:', {
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE
// });

// Export the pool with promises
module.exports = dbConnection.promise();
