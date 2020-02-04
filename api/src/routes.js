import express from 'express';
import { CompressionTypes } from 'kafkajs';
const routes = express.Router();


routes.post('/certification', async (req,res)=>{
    const message = {
        user: { id: 1, name:'Bruno'},
        course: 'Kafka com nodejs',
        grade: 10,
    }
    await req.producer.send({
        topic: 'issue-certificate',
        compression: CompressionTypes.GZIP,
        messages: [
          { value: JSON.stringify(message)},
          { value: JSON.stringify({ ...message, user:{ ...message.user, name:'Washington'}})},
        ],
      })

    return res.json({ ok:true })
});


export default routes;