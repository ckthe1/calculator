let express = require('express');
let bodyParser = require('body-parser')
let PORT = 5000;
let app = express();
app.use(express.static('server/public'));// get any request, static
app.use(bodyParser.urlencoded({ extended: true }));

let calculator = [];

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});//end listen PORT


app.get('/calculator', (req, res) => {// get info from server

    console.log(calculator);
    res.send(calculator);
});
app.post('/calculator',(req,res) =>  { 
    console.log(calculator);
    rockThatBody = req.body;
    calculator.push(req.body);
    answer(req.body);
    res.sendStatus(201);
    
});

function answer() {
    if (rockThatBody.operatorSign == '+') {
        rockThatBody.answer = Number(rockThatBody.firstNumbers) + Number(rockThatBody.secondNumbers);
    } else if (rockThatBody.operatorSign == '-') {
        rockThatBody.answer = Number(rockThatBody.firstNumbers) - Number(rockThatBody.secondNumbers);
    } else if (rockThatBody.operatorSign == '*') {
        rockThatBody.answer = Number(rockThatBody.firstNumbers) * Number(rockThatBody.secondNumbers);
    } else if (rockThatBody.operatorSign == '/') {
        rockThatBody.answer = Number(rockThatBody.firstNumbers) / Number(rockThatBody.secondNumbers);
    }
}