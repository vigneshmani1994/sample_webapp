const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color: #282c34; color: white; font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1>🚀 DevOps Demo Application 🚀</h1>
            <p>Welcome to the live demonstration!</p>
            <p>Status: <span style="color: #4caf50;">Running smoothly on Kubernetes</span></p>
        </body>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});