const express = require('express')
const app = express()
const cors = require("cors"); 
app.use(express.json())
app.use(cors({ origin: true }));

//Some GET request
app.get('/',(req,res)=>{
    res.send('hey')
}
)

//Main Post REQUEST

app.post('/api/calc',(req,res)=>{

    const first=parseFloat(req.body.firstNum);
    const second=parseFloat(req.body.secondNum);
    const oper=req.body.oper;

    // console.log(first);
    // console.log(second);
    // console.log(oper);
    if(second!=0)
    {
        const result=calcRes(first,second,oper)
        console.log(result);
        console.log(parseFloat(result)%2);
        const color=((parseFloat(result)%2==0)?'red':'green')
        
        res.status(200).json({
            'result':result+ '',
            'color':color
        }
            );
        return;
    }
    else
    {
        res.status(400).send("You can't devied by zero!");
        return;
    }

})

function calcRes(first,second,oper)
{
    switch (oper) {
        case '+':
          //console.log(first+second);
          return (first+second);
          //break;
        case '-':
          console.log(first-second);
          return (first-second);
          //break;
        case '*':
          //console.log(first*second);
          return (first*second);
          //break;
        default: // division
        //console.log(first/second);
        return (first/second);
          
      }
}

// app.get('/api/courses',(req,res)=>{
//     res.send([1,2,3])
// })


// app.get('/api/courses/:id',(req,res)=>{
//     const course=courses.find(c=>
//         c.id===parseInt(req.params.id));

//         if(!course)
//             res.status(404).send("The course not found");
//         res.send(course);
// })


// app.post('/api/courses',(req,res)=>{

//     if(!req.body.name || req.body.name<3)
//     {
//         res.status(400).send('Name is required and should be minimum 3 characters');
//         return;
//     }

//     const course={
//         id: courses.length+1,
//         name: req.body.name

//     }
//     courses.push(course); //add the new course to the array
//         res.send(course); //return it
//     //res.send(req.params.id)
// })



const port=process.env.PORT
app.listen(3000, ()=>{
console.log('port: '+port)
console.log('listening on port 3000')
}
)