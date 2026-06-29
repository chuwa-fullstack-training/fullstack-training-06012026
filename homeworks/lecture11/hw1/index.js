const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const authRouter = require('./routers/authrouter');
const app = express();


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting', err)
    })

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', authRouter);

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
})