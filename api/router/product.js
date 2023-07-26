
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const app=express();

const Project=require('../model/product');





router.get('/',(req,res)=>{
  res.status(200).json({
   
    database:database
    
  });
});


router.get('/:id',(req,res)=>{
  var id=req.params.id;
  Project.findById(id).exec().then(doc=>{
    console.log(doc);
    
    res.status(200).json(doc);
});
  });
  router.post('/',(req,res)=>{
  
     const database=new Project({
      _id :new mongoose.Types.ObjectId(),
      
     
        content:[{question:req.body.content.question,answer:req.body.content.answer}]
       
    });
    database.save().then(result=>{
      console.log(result);
    }).catch(err=>console.log(err));

    
    res.status(200).json({
      title : 'From database',
      database : database
      
    });
    
  });
  /*router.post('/:id',(req,res)=>{
    var id=req.params.id;
    res.status(200).json({
      title : 'post message',
      id : id
    });
  });
  */
  router.patch('/',(req,res)=>{
    res.status(200).json({
      title : 'update  message',
      
    });
  });
  router.patch('/:id',(req,res)=>{
    var id=req.params.id;
    Project.findById(id).exec().then(doc=>{
      console.log(doc);
      res.status(200).json(doc);
  });
});
  router.delete('/',(req,res)=>{
    res.status(200).json({
      title : 'delete message',
      
    });
    router.delete('/:id',(req,res)=>{
      var id=req.params.id;
      res.status(200).json({
        title : 'delete message',
        id : id
      });
    });
  });
  router.put('/',(req,res)=>{
    res.status(200).json({
      title : 'put message',
      
    });
  });
  router.put('/:id',(req,res)=>{
    var id=req.params.id;
    res.status(200).json({
      title : 'put message',
      id : id
    });
  });
  module.exports=router;
 
/*
  app.use('/display',(req,res)=>{
    res.render('index',{
     question : database.question,
      ans : database.answer
    }) 
  });
  */