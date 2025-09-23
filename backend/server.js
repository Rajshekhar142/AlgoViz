const express = require('express');
const dt = require('dotenv');
dt.config();
const {Pool} = require('pg');
const cors = require('cors');
const pythonShell = require('python-shell'); 
const port = process.env.PORT || 3000;



const app = express();


app.use(cors());
app.use(express.json());

const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    host:process.env.DB_HOST,
    db_port: process.env.DB_PORT,
})

pool.connect((error, client, release)=>{
    if(error){
        throw new error(err);
    }
    client.query("SELECT NOW()" , (err,result)=>{
        release();
        if(err){
            throw err;
        }
        console.log(`psql connected ${result.rows[0].now}`);
    })
})
app.get('/', (req,res)=> {
    res.send("AlgoBacktester Backend is running.");
})



app.listen(port,()=>{
    console.log("server running on port 4000");
})