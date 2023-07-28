const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
 

app.get('/',(req,res)=>{
    res.send("train in 12 hours ");
})

app.get('/train/register', (req,res)=>{
    res.send({
        "company name" :"train centeal",
        "onwer name" : "rahul",
        "roll number" : "1",
        "onwer email " : "rahulabc@edu",
        "acess code" : "FKDLjg"
    })  
})

app.get('/train/trains',(req,res)=>{
    res.send({"trainName": "delhi door h exp",

               "trainNumber": "2344",
                 "hours":"12",    
                 "Minutes":"35",
                "Seconds": "0",

                "sleeper": 3,
                     "AC": 1,
                  
                "trainName": "hydrabaad express",
                "trainNumber": "2341",
                "hours":"12",    
                 "Minutes":"35",
                 "Seconds": "0",
                 "sleeper": 4,
                  "AC": 5


            })
           


                
})

app.get('/train/trains/2344',(req,res)=>{
    res.send({"trainName": "delhi door h exp",

               "trainNumber": "2344",
                 "hours":"12",    
                 "Minutes":"35",
                "Seconds": "0"
            })
            res.send("seat available");
            res.send({"sleeper": 3,
                     "AC": 1
                    })
        res.send("delay time")
        res.send({"min ": "15"});
})



app.listen(PORT,()=>{
        console.log('http://localhost:'+PORT);
})