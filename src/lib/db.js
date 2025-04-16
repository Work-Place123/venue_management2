import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',  // blank if no password
  database: process.env.DB_NAME,
});

db.getConnection()
  .then(() => console.log('Connected to MySQL successfully'))
  .catch((err) => {
    console.error('Error connecting to MySQL:', err);
  });

export default db;
