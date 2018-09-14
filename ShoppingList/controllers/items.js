const mongoose = require('mongoose');
var Item = mongoose.model('Item');
module.exports = {
    index:(req,res)=>{
        Item.find({}, (err, item)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(item);
             }
        });
    },
    new:(req,res)=>{
        console.log("BODY",req.body);
        Item.create(req.body, (err, item)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(item);
            }
        });
    },
    delete:(req,res)=>{
        Item.remove({_id:req.params.id}, (err,item)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(item);
            }
        });
    },
    show:(req,res)=>{
        Item.findOne({_id:req.params.id}, (err, item)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(item);
            }
        })
    },
    edit:(req,res)=>{        
        Item.update({_id: req.body._id}, req.body, (err,data)=>{
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else { 
                res.json(data);
            }
        });
    },
}