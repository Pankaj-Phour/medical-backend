const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())


const Contact = require('./controllers/Contact');

app.post('/contact',Contact)



app.listen(PORT,(req,res)=>{
    console.log(`App is running successfully on http://localhost${PORT}`);
})