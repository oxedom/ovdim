const pool = mysql.createPool({
    host: 'your-rds-endpoint',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database-name',
    connectionLimit: 10, // Adjust the connection limit as needed
  });
  