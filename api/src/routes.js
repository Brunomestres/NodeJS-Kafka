import express from 'express';

const routes = express.Router();


routes.post('/certification', async (req,res)=>{
    const message = {
        user: { id: 1, name:'Bruno'},
        course: 'Kafka com nodejs',
        grade: 5,
    }
    await req.producer.send({
        topic: 'issue-certificate',
        messages: [
          { 
            value: JSON.stringify(message) 
          },
        ],
      })

    return res.json({ ok:true })
});


export default routes;