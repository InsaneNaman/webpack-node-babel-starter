import restify from 'restify';
const server = restify.createServer();

server.get('/', (req,res)=>{
    res.send('Hello World');
});

server.listen(8080,()=>{
    console.log(`${server.name} is working at ${server.url}`);
});