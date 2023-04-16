const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}));

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);

app.get('/test' , (req,res) => {
    res.json('test ok');
});
//b4N22IYreoJkPDq6
app.post('/register', (req,res) => {
    const {fName, lName, email, password} = req.body;
    res.json({fName, lName, email, password });
});

app.listen(4000);