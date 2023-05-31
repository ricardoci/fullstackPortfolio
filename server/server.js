const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the PDF file
app.get('/FullStackResume.pdf', (req, res) => {
  const filePath = path.join(__dirname, 'FullStackResume.pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="FullStackResume.pdf"');
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(filePath);
});

// Serve the index.html file in the production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
} else {
  // Serve the index.html file in the development environment
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
  });
}

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
