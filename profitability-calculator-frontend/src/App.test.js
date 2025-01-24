import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProfitabilityCalculator from './App';

test('calculates profitability correctly', async () => {
  render(<ProfitabilityCalculator />);
  
  // Fill out the form
  fireEvent.change(screen.getByLabelText(/price per kilometer/i), {
    target: { value: 2.5 },
  });
  fireEvent.change(screen.getByLabelText(/price per hour/i), {
    target: { value: 20 },
  });
  fireEvent.change(screen.getByLabelText(/kilometers/i), {
    target: { value: 200 },
  });
  fireEvent.change(screen.getByLabelText(/hours/i), {
    target: { value: 2 },
  });
  fireEvent.change(screen.getByLabelText(/income/i), {
    target: { value: 400 },
  });

  // Submit the form
  fireEvent.click(screen.getByText(/calculate profitability/i));

  // Wait for the results to appear
  await waitFor(() => {
    // Check for all the elements at once, without disabling any rules
  expect(screen.getByText(/distance cost/i)).toBeInTheDocument();
  expect(screen.getByText(/time cost/i)).toBeInTheDocument();
  expect(screen.getByText(/total cost/i)).toBeInTheDocument();
  expect(screen.getByText('$-140.00')).toBeInTheDocument();
});
});
