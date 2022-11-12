const {createPool} = require("mysql");
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Jashan2348",
    connectionLimit: 10
});


pool.query('select * from now.riddlegame', (err, res) =>{
        return console.log(res)
});

pool.query('select * from now.sudokugame', (err, res) =>{
    return console.log(res)
});

app.get('/', (req, res) => {
    pool.query('select * from now.sudokugame', (err, sudokus) =>{
        res.json(sudokus);
    });
    // pool.query('select * from now.riddlegame', (err, riddles) =>{
    //     res.send(riddles)
    // });
});

// app.get('/', (req, res) => {
//     pool.query('select * from now.riddlegame', (err, riddles) =>{
//         res.send(riddles)
//     });
// });

app.listen('4000', () => {
    console.log('starting 4000....')
});