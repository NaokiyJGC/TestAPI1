const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // JSONボディのパースを追加

app.post('/api/respond', (req, res) => {
  const userInput = req.body.input;
  if (userInput === 'hello') {
    res.json({ response: 'world' });
  } else {
    res.json({ response: 'unknown input' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
