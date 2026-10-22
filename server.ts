import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve public directory as static fallback
app.use(express.static(path.join(__dirname, 'public')));

// SPA Fallback: send index.html for all page routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running on http://0.0.0.0:${port}`);
});
