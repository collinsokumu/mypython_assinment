const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/signup.html', (req, res) => {
  const { email, password } = req.body;

  // Here you would typically handle the sign-up process
  // For this example, let's just log the received data
  console.log('Received sign-up data:', { email, password });

  // Assuming sign-up was successful, send a success response
  res.status(200).json({ message: 'Sign up successful!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
