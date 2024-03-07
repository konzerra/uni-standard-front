//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/webapp'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/webapp/'}),
);

// Start the app by listening on the port 5001
app.listen(process.env.PORT || 5200);
