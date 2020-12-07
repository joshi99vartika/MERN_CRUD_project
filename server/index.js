const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const FoodControllers = require('./Controllers/FoodController');
var cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors());

mongoose.connect('mongodb://localhost/food',{
    useNewUrlParser : true,
     useUnifiedTopology: true,
});

//post request
app.post('/insert' ,FoodControllers.createProducts);

//read request
app.get('/read' ,FoodControllers.readProducts);

//update request

app.put('/update' ,FoodControllers.updateProducts);
//delete request

app.delete('/delete/:id',FoodControllers.deleteProducts )



app.listen(3001, () =>{
    console.log('server running at port 3001');
});



