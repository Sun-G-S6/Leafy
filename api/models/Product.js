const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    name: String,
    address: String,
    photos: [String],
    description: String,
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;