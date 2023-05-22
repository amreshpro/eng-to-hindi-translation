const express = require('express')
// import { translate } from '@vitalets/google-translate-api';
const cors = require('cors')
const {translate} = require("@vitalets/google-translate-api")


const port = 4567

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())




// default

app.get("/",(req,res)=>{
    console.log(res.send({"status":"worked , success"}))
})




app.post("/",async(req,res)=>{
// console.log(req)cllcl
console.log(req.body.text)
let {text}= await translate(req.body.text,{to:"hi"}).then((result)=>{

    console.log(result.text)
res.send({"text":result.text})
    return result.text
})

//console.log(text)

// res.send({"response":"response from the server h be","text":text})
})




app.listen(port,()=>{
    console.log(`server is started at http://localhost:${port}`)
})