import fs from 'fs'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(function(req, res, next){
  res.header("Access-Control-Allow_Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, x-Requested-with, Content-type, Accept");
  next()  
})

app.post(`/form/:id`, (req, res) => {
    var docs_data = req.body;
    var name = req.params.id
    console.log(docs_data)
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data)
})

app.get("/data/:id", (req, res)=> {
    var docId=req.params.id
    fs.readFile(`files/${docId}.json`, (err, data) =>{
        if (err) throw err;
        let qus_data = JSON.parse(data)
        console.log(req.params.id)
        res.send(qus_data)
    })
} )

app.listen(process.env.PORT, () => {
    console.log ("new year!")
})

