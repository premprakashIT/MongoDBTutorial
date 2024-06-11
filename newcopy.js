const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/customerdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define schema
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
});

// Define model
const Customer = mongoose.model('Customer', customerSchema);

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
        const { name, email, phone } = req.body;
        const newCustomer = new Customer({ name, email, phone });
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
 