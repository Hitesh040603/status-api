const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
    res.json({ status: 'API is running smoothly' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
