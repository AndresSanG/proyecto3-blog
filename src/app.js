const express = require('express')
const db = require('./utils/database')
const postRouter = require('./posts/posts.router')
const app = express()
app.use(express.json())

db.authenticate()
    .then(()=>{console.log('validate credencials')})
    .catch(err=>{console.log(err)})

db.sync()
    .then(()=>{console.log('data base sync')})
    .catch(err=>{console.log(err)})

app.get('/',(req,res)=>{
    res.status(200).json(
        {message:'server Ok'}
    )
})
app.use('/api/v1',postRouter)
app.listen(9000,()=>{
    console.log("living in port 9000")
})



module.exports = app
