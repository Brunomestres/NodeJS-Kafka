import express from 'express';

const routes = express.Router();


routes.post('/certification', async (req,res)=>{
    
    console.log(req.producer);

    return res.json({ ok:true })
});


export default routes;