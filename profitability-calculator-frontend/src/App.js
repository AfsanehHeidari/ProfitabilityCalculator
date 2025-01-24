import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Box } from '@mui/material';

function ProfitabilityCalculator() {
  const [formData, setFormData] = useState({
    pricePerKm: '',
    pricePerHour: '',
    kilometers: '',
    hours: '',
    income: '',
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculateProfitability = () => {
    const { pricePerKm, pricePerHour, kilometers, hours, income } = formData;
    const distanceCost = pricePerKm * kilometers;
    const timeCost = pricePerHour * hours;
    const totalCost = distanceCost + timeCost;
    const profitability = income - totalCost;

    setResult({
      distanceCost,
      timeCost,
      totalCost,
      profitability,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Profitability Calculator
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price per Kilometer"
            variant="outlined"
            fullWidth
            name="pricePerKm"
            value={formData.pricePerKm}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price per Hour"
            variant="outlined"
            fullWidth
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Kilometers"
            variant="outlined"
            fullWidth
            name="kilometers"
            value={formData.kilometers}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Hours"
            variant="outlined"
            fullWidth
            name="hours"
            value={formData.hours}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Income"
            variant="outlined"
            fullWidth
            name="income"
            value={formData.income}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={calculateProfitability}
        style={{ marginTop: '20px' }}
      >
        Calculate Profitability
      </Button>

      {result && (
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            marginTop: '30px',
            backgroundColor: result.profitability < 0 ? '#ffe5e5' : '#e8f5e9',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Results
          </Typography>
          <Box style={{ marginBottom: '10px' }}>
            <Typography variant="h6">Distance Cost:</Typography>
            <Typography variant="body1" color="textSecondary">
              ${result.distanceCost.toFixed(2)}
            </Typography>
          </Box>

          <Box style={{ marginBottom: '10px' }}>
            <Typography variant="h6">Time Cost:</Typography>
            <Typography variant="body1" color="textSecondary">
              ${result.timeCost.toFixed(2)}
            </Typography>
          </Box>

          <Box style={{ marginBottom: '10px' }}>
            <Typography variant="h6">Total Cost:</Typography>
            <Typography variant="body1" color="textSecondary">
              ${result.totalCost.toFixed(2)}
            </Typography>
          </Box>

          <Box style={{ marginBottom: '10px', marginTop: '10px' }}>
            <Typography variant="h6">Profitability:</Typography>
            <Typography
              variant="body1"
              style={{
                color: result.profitability < 0 ? 'red' : 'green',
                fontWeight: 'bold',
              }}
            >
              ${result.profitability.toFixed(2)}
            </Typography>
          </Box>
        </Paper>
      )}
    </div>
  );
}

export default ProfitabilityCalculator;
