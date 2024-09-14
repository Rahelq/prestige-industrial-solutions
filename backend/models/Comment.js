// const db = require('../db/dbConfig');

// // SQL query to create the table if it doesn't exist
// const createCommentTable = () => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS comments (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       comment TEXT NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )
//   `;

//   db.query(query, (err, result) => {
//     if (err) throw err;
//     console.log('Comments table created or already exists.');
//   });
// };

// // Create the table when the server starts
// createCommentTable();
