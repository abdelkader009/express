console.log("hello")
const express = require('express')

const app = express()
//time
app.use((req,res,next)=>{
    let hours=new Date().getHours()
    console.log(hours)
    let dates=new Date().getDay()
    
    console.log(dates)
    if((hours<9 || hours>17) || (dates ==6 || dates ==0 )) {
        return res.sendFile(__dirname+'/public/notfound.html')
   }
   else  next()
})
const port = 8080
// // app.get('/',(req,res)=>{
// //     res.send('hello world')
// // }
// )
app.use(express.static('Public'));
app.listen (8080,(err)=>{
    err ? console.log(err) : console.log("server is running on port 8080")
}) 