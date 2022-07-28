import express from 'express'
import { routers } from './routes';

const server = express();

server.use(express.json())
server.use(routers);

server.listen(5000, ()=>{
    console.log("teste 123")
})
