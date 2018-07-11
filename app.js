const express = require('express');
const app = express();
app.use(express.json());

const Ninjas = [
    {name:'Tadashi Hamada',rank:'Black Belt', available:false },
    {name:'Tinashi Hamada',rank:'White Belt', available:true },
    {name:'Joye Lee',rank:'Black Belt', available:false },
    {name:'Tony Choi',rank:'Green Belt', available:true },
    {name:'Hyrem Peng',rank:'Black Belt', available:true }
];

app.get('/ninjas',function(req, res){
    res.send(Ninjas);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));

