#!/usr/bin/env node
const scrap      = require('./modules/scrap.js')
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser') 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', async (req,res) => {
    try{
        const kode_boking = req.query.kode
        
        let getData       = await scrap(kode_boking)
        
        res.header({
            'Content-Type': 'application/json'
        })

        res.send({
            status: 200,
            msg: 'Success',
            data: getData
        })
    }
    catch(err){
        res.send({
            status: 400,
            msg: 'Error',
            data: err
        }, 400)
    }
})

app.listen(1471, () => {
    console.log('listen from 1471')
})
    