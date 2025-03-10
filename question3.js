const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! James Stanley J. Dimarucut' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});