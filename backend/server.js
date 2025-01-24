const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Profitability Calculator Backend is running!');
});

// Endpoint for profitability calculation
app.post('/calculate', (req, res) => {
    const { pricePerKm, pricePerHour, kilometers, hours, income } = req.body;

    if (!pricePerKm || !pricePerHour || !kilometers || !hours || !income) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const distanceCost = pricePerKm * kilometers;
    const timeCost = pricePerHour * hours;
    const totalCost = distanceCost + timeCost;
    const profitability = income - totalCost;

    res.json({
        distanceCost,
        timeCost,
        totalCost,
        profitability,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
