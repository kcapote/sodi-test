//generador de hash
const shortid = require('short-id');
//express
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//funcionalidades construidas
const { profit, url } = require('./resolver');
const  urlHandler = url(shortid);
const routes = require('./routes/routes.js'); 

app.use(cors());
app.use(bodyParser.json());
app.use(routes({urlHandler, profit ,express}) );

//configuracion del front
app.use(express.static(__dirname + '/public'));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () =>{
    console.log(`Service running on port ${ port }`);
});


///////////Descomentar esta sección si  se quiere probar sin el api rest
//  const { profit, url } = require('./resolver');
//  const shortid = require('short-id');
//  let testArray = [44, 30, 22, 32, 35, 30, 41, 38, 15];
//  let testArray1 = [2,3,4,2];
//  let testArray2 = [50, 30, 4, 2];

//  console.log(`Maxima ganancia  ${profit(testArray ).calculateMaxProfit() }`);
//  console.log(`Maxima ganancia  ${profit(testArray1).calculateMaxProfit() }`);
//  console.log(`Maxima ganancia  ${profit(testArray2).calculateMaxProfit() }`);


// const urlHandler = url(shortid);
// const shortStringUrl1 = urlHandler.shortStringUrl('www.google.com');
// const shortStringUrl2 = urlHandler.shortStringUrl('www.youtube.com');

// console.log({shortStringUrl1, shortStringUrl2});

// console.log({
//     initUrl1: urlHandler.initialUrl(shortStringUrl1),
//     initUrl2: urlHandler.initialUrl(shortStringUrl2)
// })

// console.log({ list: urlHandler.list()});


