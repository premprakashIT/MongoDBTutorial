// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
// var cors = require("cors");

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/smartshopdb', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// // Define schema
// const customerSchema = new mongoose.Schema({
//     UserId: String,
//     UserName: String,
//     Password: String,
//     Email: String,
//     Mobile: String
// });

// // Define model
// const Customer = mongoose.model('tblcustomers', customerSchema);  // Ensure the model name matches the collection name

// // Middleware to parse request bodies
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // GET endpoint to fetch customers
// app.get('/customers', async (req, res) => {
//     try {
//         const customers = await Customer.find();  // Use 'Customer' model
//         res.json(customers);
//     } catch (err) {
//         console.error('Error fetching customers:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // POST endpoint to create a new customer
// app.post('/customers', async (req, res) => {
//     try {
//         const { UserId, UserName, Password, Email, Mobile } = req.body;
//         const newCustomer = new Customer({ UserId, UserName, Password, Email, Mobile });
//         await newCustomer.save();
//         res.status(201).send('Customer created successfully');
//     } catch (err) {
//         console.error('Error creating customer:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the cors package

// const app = express();

// // Use CORS middleware
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/smartshopdb', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// // Define schema
// const customerSchema = new mongoose.Schema({
//     UserId: String,
//     UserName: String,
//     Password: String,
//     Email: String,
//     Mobile: String
// });

// // Define model
// const Customer = mongoose.model('tblcustomers', customerSchema);

// // Middleware to parse request bodies
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // GET endpoint to fetch customers
// app.get('/customers', async (req, res) => {
//     try {
//         const customers = await Customer.find();
//         res.json(customers);
//     } catch (err) {
//         console.error('Error fetching customers:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // POST endpoint to create a new customer
// app.post('/customers', async (req, res) => {
//     try {
//         const { UserId, UserName, Password, Email, Mobile } = req.body;
//         const newCustomer = new Customer({ UserId, UserName, Password, Email, Mobile });
//         await newCustomer.save();
//         res.status(201).send('Customer created successfully');
//     } catch (err) {
//         console.error('Error creating customer:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartshopdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define schema
const customerSchema = new mongoose.Schema({
    UserId: String,
    UserName: String,
    Password: String,
    Email: String,
    Mobile: String
});

// Define model
const Customer = mongoose.model('tblcustomers', customerSchema);

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET endpoint to fetch customers
app.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).send('Internal Server Error');
    }
});

// POST endpoint to create a new customer
app.post('/customers', async (req, res) => {
    try {
        const { UserId, UserName, Password, Email, Mobile } = req.body;
        const newCustomer = new Customer({ UserId, UserName, Password, Email, Mobile });
        await newCustomer.save();
        res.status(201).send('Customer created successfully');
    } catch (err) {
        console.error('Error creating customer:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
