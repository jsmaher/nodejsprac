const express = require('express');
const router = express.Router()

router.get('/data',(req,res)=>{
    res.send({
        name:'Mujro',
        caste:'Darbar'
    })
})


router.post('/post',(req,res)=>{
    console.log('Connected',req.body)
})

module.exports = router
