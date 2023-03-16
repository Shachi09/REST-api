const express = require('express');
const app = express();

require('./Database/Connection');

const flowerModel = require('./Models/Flowers');

app.use(express.json());
const port = process.env.PORT || 8000;

//endpoints and requests

app.post('/flowers', async (req, res)=>{

    try{
   
    const flower = new flowerModel(req.body);

    const flowerAdd = await flower.save();

    res.status(201).send(flowerAdd);
    console.log('Created');

}catch(e){

    console.log(e)
    res.status(404).send(e)
}

})

app.get('/flowers', async(req, res)=>{
    try{
        const data = await flowerModel.find();
        res.status(200).send(data)
    }
    catch(e){
        console.log(e)
        res.status(404).send(e);
    }
})


// get by id 
app.get('/flowers/:id', async(req, res)=>{
    try{
        const _id = req.params.id ;
        const flowerData = await flowerModel.findById(_id) 
         if(!flowerData){
            res.status(404);
         }else{
            res.send(flowerData);
         }
    }
    catch(e){
        console.log(e);
    }

})


get by name
app.get('/flowers/:name', aysnc(req, res){
    try{

    }   
    catch(e){
        res.status(404).send();
        console.log(e)
    }
})




app.listen(port, () => {
    
    console.log(`listening on http://localhost:${port}`)
})