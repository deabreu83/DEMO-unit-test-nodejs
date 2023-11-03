const express = require('express');

const app = express();


app.use(express.json());


app.get('/tasks', (req, res) => {

    if(!req.params.id){
        res.status(400).json({
            msg:"No se envio el id",
            status:-1
        });
    }
    res.json({ tasks: ['task1', 'task2', 'task3'] });
});
  


const PORT = process.env.PORT || 3000;



const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


module.exports = server;