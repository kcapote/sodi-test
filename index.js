//generador de hash
const shortid = require('shortid');
//express
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//funcionalidades construidas
const { profit, url } = require('./resolver');
const  urlHandler = url(shortid);
const routes = require('./routes/routes.js'); 

app.use(routes({urlHandler, express}) );

app.listen(port, () =>{
    console.log(`Service running on port ${ port }`);
});



//test
// let testArray = [44, 30, 22, 32, 35, 30, 41, 38, 15];
// let test2 = [2,3,4,2];
// let test3 = [50, 30, 4, 2];

// console.log(`Maxima ganancia  ${profit(testArray).calculateMaxProfit() } `);
// console.log(`Maxima ganancia  ${profit(test2).calculateMaxProfit() } `);
// console.log(`Maxima ganancia  ${profit(test3).calculateMaxProfit() } `);



// const add = ( () =>{
//     let count = 0;

//     return () =>{
//         return count +1;
//     }

// } )();

// console.log(add());

// const d = function(){
//     let r = 0;
//     return function(){
//         r+=1;
//         return r;
//     }
// };

// let t = d();
// console.log(t());
// console.log(t());