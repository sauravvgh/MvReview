const express = require('express')
const userRouter = require('./routes/user')
require("./db")
const app = express();
app.use(express.json());   


app.use('/api/user',userRouter); 
app.get('/about', (req, res)=>{
    res.send('<h1>Hello, Iam from your About backend server</h1>');
})
// app.post('/api/create', (req, res)=>{
//     res.send('<h1>Bhajman radhe govinda radhe</h1>')
// })

app.listen(8000, ()=>{
    console.log('The port is listening on Port 8000');
});
    