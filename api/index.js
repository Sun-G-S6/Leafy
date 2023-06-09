const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const Product = require('./models/Product.js');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const fs = require('fs');

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
    //origin: 'http://localhost:5173' //Changes for jackie
    origin: 'http://127.0.0.1:5173'
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test' , (req,res) => {
    res.json('test ok');
});
//booking
//3TzCX67xnYihupU2
app.post('/register', async (req, res) => {
    const { fName, lName, phone, email, password, address } = req.body;

    try {
        const userDoc = await User.create({
            fName,
            lName,
            email,
            phone,
            password: bcrypt.hashSync(password, bcryptSalt)
            // address: {
            //     street: address.street,
            //     city: address.city,
            //     state: address.state,
            //     postalCode: address.postalCode,
            // },
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

const photosMiddleware = multer({dest:'uploads/'});
app.post('/upload', photosMiddleware.array('photos', 100), (req,res) => {
    const uploadedFiles = [];
    for (let i=0; i < req.files.length; i++) {
        const {path, originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length-1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads\\', ''));
    }
    res.json(uploadedFiles);
});

app.post('/products', function (req, res) {
    const { token } = req.cookies;
    const { name, 
        totalPrice,
        pricePerUnit, 
        quantity, 
        addedPhotos, 
        description, 
        categories } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Product.create({
            owner:userData.id,
            name,
            totalPrice,
            pricePerUnit,
            quantity,
            photos:addedPhotos,
            description,
            category:categories
        });
        res.json(placeDoc);
    });
});

app.get('/user-products', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
       const { id } = userData;
       res.json( await Product.find({ owner: id }) );
    });
});

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    res.json(await Product.findById(id));
});

app.put('/products', async (req, res) => {
    const { token } = req.cookies;
    const { 
        id,
        name,
        totalPrice,
        pricePerUnit,
        quantity,
        addedPhotos,
        description,
        categories } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        const productDoc = await Product.findById(id);
        if (userData.id === productDoc.owner.toString()) {
            productDoc.set({
                name,
                totalPrice,
                pricePerUnit,
                quantity,
                photos:addedPhotos,
                description,
                category:categories
            });
            await productDoc.save();
            res.json('ok');
        }
    });

});

app.get('/products', async (req, res) => {
    res.json( await Product.find() );
});

app.get('/users/:id', async (req, res) => {
    console.log('fetching user information');
    const { id } = req.params;

    try {
        const user = await User.findById(id, 'fName lName email phone address');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch user information' });
    }
});

app.put('/updateAccountsettings', async (req, res) => {
    const { token } = req.cookies;
    const { 
        id,
        fName,
        lName,
        email,
        password,
        phone,
        address,
        image
        } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        const userDoc = await User.findById(id);
        if (userData.id === userDoc.id) {
            userDoc.fName = fName || userDoc.fName;
            userDoc.lName = lName || userDoc.lName;
            userDoc.email = email || userDoc.email;
            userDoc.password = bcrypt.hashSync(password, bcryptSalt) || userDoc.password;
            userDoc.phone = phone || userDoc.phone;
            userDoc.address = address || userDoc.address;
            userDoc.image = toString(image) || userDoc.image;

            await userDoc.save();
            res.json('ok');
        }
    });
});

app.put('/updateProductquan', async (req, res) => {
    const {token} = req.cookies;
    const {
        id,
        quantity
    } = req.body;
    
    //console.log(req.body);
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const itemDoc = await Product.findById(id);
    
    itemDoc.set({
        quantity: quantity
    })
    await itemDoc.save();
    res.json('ok');
    }
    );
});

//app.listen(4000, "0.0.0.0"); //added for jackie
app.listen(4000); //added for jackie