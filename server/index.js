const express = require('express');
const app = express();
const cros = require('cors')

app.use(cros())
app.use(express.json())

app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({status:'ok'});
})

app.listen(1337,() =>{
    console.log('Server Started')
})
