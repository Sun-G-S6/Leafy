const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');

const app = express();
require('dotenv').config()

/********** YARN ADD ALL THIS IN THE API DIRECTORY
*********** yarn add express cors mongoose bcryptjs jsonwebtoken dotenv cookie-parser
*********** yarn add image-downloader

*/

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = '7asj7d1301fsa23ho53vb191131';

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));
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
            phone,
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
            jwt.sign({
                email:userDoc.email, 
                id:userDoc._id}, 
                jwtSecret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('Password not ok');
        }
    } else {
        res.json('not found');
    }
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const {fName, lName, email, _id} = await User.findById(userData.id);
            res.json({ fName, lName, email, _id });
        });
    } else {
        res.json(null);
    }
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
});

app.post('/upload-by-link', async (req,res) => {
    const {link} = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
});

const photosMiddleware = multer({dest:'uploads'});
app.post('/upload', photosMiddleware.array('photos', 100), (req,res) => {
    res.json(req.files);
});

app.listen(4000);