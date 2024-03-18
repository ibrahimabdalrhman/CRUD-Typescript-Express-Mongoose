import express,{Request,Response,NextFunction}from 'express';
import dotenv from 'dotenv';
dotenv.config({path:'./.env'});
import {DB} from './config/database';
import productRoute from './routers/product'
DB();


const app =express();

app.use(express.json());

app.use('/products',productRoute);


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server running on port ${port}...`);
});