const express=require('express');
const ejs=require('ejs');
const app=express();
//      use of morgan
const morgan=require('morgan');
app.use(morgan('dev'));
// use of mongoose
const mongoose=require('mongoose');

// use of body-parser
const body_parse=require('body-parser');

mongoose.connect('mongodb+srv://prasath:prasath@prasathcluster.tcpv5jv.mongodb.net/?retryWrites=true&w=majority');

app.use(express.static('Public'));
app.use(body_parse.urlencoded({extended:false}));
app.use(body_parse.json());
/// setting up Access control Allow 
app.use((req,res,next)=>{
   res.header('Access-Control-Allow-Orgin','*');
    res.header('Access-Contol-Allow-Headers','Orgin,Content-Type,Access,Authorization,X-Requested-With');
    if(req.method==='OPTIONS')
    {
        res.header('Access-Control-Allow-Metbods','GET,POST');
        return res.status(200).jason({
          
        });
    }
    next();
});



const database=require('./api/router/product');



app.use('/database',database);



const Project=require('./api/model/product');
app.set('view engine','ejs');

var ids=[{id : '6492e5a6cb16c746e768fcd2'},{id :"64932efb9870231c82d531bd"}]


app.use('/render',(req,res)=>{
    

    ids.forEach((element)=> {
        
   
    Project.findById(element.id).exec().then(result=>{
      /*  res.render('index',{
            title : result
        })*/
        res.status(200).json(result);
    })
    
        
   
})

});

    







//               ERROR HANDLING

app.use((req,res,next)=>{
    const error=new Error('not found');
    error.status=404;
    next(error);

});
app.use((error,req,res,next)=>{
    res.status(error.status);
    res.json({
        error:{
            title : error.message,
            error_code : error.status
        }
    });
});
module.exports=app;