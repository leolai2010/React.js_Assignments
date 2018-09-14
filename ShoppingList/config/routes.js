var Item = require('../controllers/items.js');
module.exports = (app)=>{
    app.get('/items', (req,res)=>{
        Item.index(req,res);
    });
    app.post('/new/item/', (req,res)=>{
        Item.new(req,res);
    });
    app.delete('/delete/item/:id', (req,res)=>{
        Item.delete(req,res);
    });
    app.get('/show/item/:id', (req,res)=>{
        Item.show(req,res);
    });
    app.post('/edit/item/:id', (req,res)=>{
        Item.edit(req,res);
    });
}