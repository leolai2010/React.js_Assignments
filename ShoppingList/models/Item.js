const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    price: {type: Number, required: [true, "Price is required"], minlength: [1, "Must have at least 1 Digit"]}
}, {timestamps: true})
mongoose.model('Item', ItemSchema); 