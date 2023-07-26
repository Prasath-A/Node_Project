const http=require('http');


const port=3500;
//const host='127.0.0.1';
const json=require('./json');
const server=http.createServer(json);
server.listen(port,()=>{
    console.log('working brooo');
})