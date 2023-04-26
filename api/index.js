const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = '7asj7d1301fsa23ho53vb191131'

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test' , (req,res) => {
    res.json('test ok');
});
//booking
//3TzCX67xnYihupU2
app.post('/register', async (req,res) => {
    const {fName, lName, email, password} = req.body;

    try{
        const userDoc = await User.create({
            fName,
            lName,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }
    
});

app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token', token).json('Password ok');
            });
        } else {
            res.status(422).json('Password not ok');
        }
    } else {
        res.json('not found');
    }
});

app.listen(4000);