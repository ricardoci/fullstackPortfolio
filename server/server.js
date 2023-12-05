const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/build')));
// The extra `../` in the path to match the correct directory structure

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the PDF file
app.get('/FullStackResume.pdf', (req, res) => {
  const filePath = path.join(__dirname, 'FullStackResume.pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="FullStackResume.pdf"');
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(filePath);
});

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
const Port = process.env.Port || 3001;
app.listen(Port, () => {
  console.log(`App is listening on port ${Port}`);
});

module.exports = app;