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

app.get('/api/historical-data/:symbol', async(req,res)=>{
    const {symbol} = req.params;
    try{
        const result = await pool.query(
            `SELECT date , open , high , low , close , volume FROM daily_prices WHERE symbol = $1 ORDER BY date ASC`,[symbol.toUpperCase()]
        );
        res.json(result.rows);
    } catch(err){
        console.error('Error fetching historical data:' , err);
        res.status(500).json({
            error: 'Failed to fetch historical data'
        })
    }
})



app.listen(port,()=>{
    console.log("server running on port 4000");
})