import express from 'express';

const app = express();

app.post('/certification',(req,res)=>{

    return res.json({ ok:true })
});

app.listen(3333);