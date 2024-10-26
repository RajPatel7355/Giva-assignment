// const express = require('express');   // Import Express
// const cors = require('cors');         // Import CORS
// const dotenv = require('dotenv');     // Import dotenv for environment variables
// const { Pool } = require('pg');       // Import PostgreSQL client

// dotenv.config();  // Load environment variables from .env file

// // Initialize Express app
// const app = express();

// // Use CORS middleware
// app.use(cors());

// // Use JSON middleware to parse JSON request bodies
// app.use(express.json());

// // PostgreSQL connection pool
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// });

// // Test PostgreSQL connection
// pool.connect((err, client, release) => {
//   if (err) {
//     console.error('Error connecting to PostgreSQL:', err.stack);
//   } else {
//     console.log('Connected to PostgreSQL');
//   }
//   release();  // release the client back to the pool
// });

// // Route to fetch all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM products');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// app.post('/api/products', async (req, res) => {
//     const { name, description, price, quantity } = req.body;
//     try {
//       const result = await pool.query(
//         'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
//         [name, description, price, quantity]
//       );
//       res.status(201).json(result.rows[0]);
//     } catch (err) {
//       console.error('Error inserting product:', err.message);
//       res.status(500).send('Server error');
//     }
//   });

// const express = require('express');   // Import Express
// const cors = require('cors');         // Import CORS
// const dotenv = require('dotenv');     // Import dotenv for environment variables
// const { Pool } = require('pg');       // Import PostgreSQL client

// dotenv.config();  // Load environment variables from .env file

// // Initialize Express app
// const app = express();

// // Use CORS middleware
// app.use(cors());

// // Use JSON middleware to parse JSON request bodies
// app.use(express.json());

// // PostgreSQL connection pool
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// });

// // Test PostgreSQL connection
// pool.connect((err, client, release) => {
//   if (err) {
//     console.error('Error connecting to PostgreSQL:', err.stack);
//   } else {
//     console.log('Connected to PostgreSQL');
//   }
//   release();  // release the client back to the pool
// });

// // Route to fetch all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM products');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route to add a new product
// app.post('/api/products', async (req, res) => {
//   const { name, description, price, quantity } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, description, price, quantity]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error inserting product:', err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route to update a product
// app.put('/api/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, description, price, quantity } = req.body;

//   // Log incoming data for debugging
//   console.log("Updating product:", {
//     id,
//     name,
//     description,
//     price,
//     quantity
//   });

//   try {
//     const result = await pool.query(
//       'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
//       [name, description, price, quantity, id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error('Error updating product:', err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route to delete a product
// app.delete('/api/products/:id', async (req, res) => {
//   const { id } = req.params;

//   // Log the ID of the product being deleted
//   console.log("Deleting product with ID:", id);

//   try {
//     const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json({ message: 'Product deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting product:', err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');   // Import Express
// const cors = require('cors');         // Import CORS
// const dotenv = require('dotenv');     // Import dotenv for environment variables
// const { Pool } = require('pg');       // Import PostgreSQL client
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Example user credentials (in production, use a database)
// const users = [
//   { username: 'admin', password: bcrypt.hashSync('password', 8) } // Password is hashed
// ];

// // Login Route
// app.post('/api/auth/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(user => user.username === username);

//   // Validate user credentials
//   if (user && bcrypt.compareSync(password, user.password)) {
//     const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// dotenv.config();  // Load environment variables from .env file

// // Initialize Express app
// const app = express();

// // Use CORS middleware
// app.use(cors());

// // Use JSON middleware to parse JSON request bodies
// app.use(express.json());

// // PostgreSQL connection pool
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// });

// // Test PostgreSQL connection
// pool.connect((err, client, release) => {
//   if (err) {
//     console.error('Error connecting to PostgreSQL:', err.stack);
//   } else {
//     console.log('Connected to PostgreSQL');
//   }
//   release();  // release the client back to the pool
// });

// // Route to fetch all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM products');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route to add a new product
// app.post('/api/products', async (req, res) => {
//   const { name, description, price, quantity } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, description, price, quantity]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error inserting product:', err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route to update a product
// app.put('/api/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, description, price, quantity } = req.body;

//   // Log incoming data for debugging
//   console.log("Updating product:", {
//     id,
//     name,
//     description,
//     price,
//     quantity
//   });

//   try {
//     const result = await pool.query(
//       'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
//       [name, description, price, quantity, id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error('Error updating product:', err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route to delete a product
// app.delete('/api/products/:id', async (req, res) => {
//   const { id } = req.params;

//   // Log the ID of the product being deleted
//   console.log("Deleting product with ID:", id);

//   try {
//     const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json({ message: 'Product deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting product:', err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Start the server only if not in test mode
// if (process.env.NODE_ENV !== 'test') {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// // Export app for testing
// module.exports = app;

const express = require('express');   // Import Express
const cors = require('cors');         // Import CORS
const dotenv = require('dotenv');     // Import dotenv for environment variables
const { Pool } = require('pg');       // Import PostgreSQL client

dotenv.config();  // Load environment variables from .env file

// Initialize Express app
const app = express();

// Use CORS and JSON middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Test PostgreSQL connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
  release();  // release the client back to the pool
});

// Public Route to Fetch All Products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to Add a New Product (No Authentication)
app.post('/api/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting product:', err.message);
    res.status(500).send('Server error');
  }
});

// Route to Update a Product (No Authentication)
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;

  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
      [name, description, price, quantity, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating product:', err.message);
    res.status(500).send('Server error');
  }
});

// Route to Delete a Product (No Authentication)
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err.message);
    res.status(500).send('Server error');
  }
});

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;



  