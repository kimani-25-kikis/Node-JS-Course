import { Console } from 'console';
import {createServer} from 'http';
const PORT = process.env.PORT;
const users = [
    {id:1, name:'Joshua'},
    {id:2, name:'Kimani'},
    {id:3, name:'Ngigi'},
];

const server = createServer((req, res) =>{
    if(req.url ==='/api/users' && req.method ==='GET'){
        res.setHeader{'Content-Type', 'applcation/json'};
        res.write(JSON.stringify());
        res.end();
    }
});
server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});