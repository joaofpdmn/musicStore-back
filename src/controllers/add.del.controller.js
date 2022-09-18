import db from "../database/db.js";
import {ObjectId} from "mongodb";

const addList= (req,res)=>{
    const product=req.body;
    console.log(product);
    try{
        db.collection("list").insertOne(product.toLowerCase());
        res.status(201).send(product);
    }catch (err){
        console.log(err)
        res.sendStatus(500);
    }
};
const delList= async(req,res)=>{
    const {id}=req.body;
    try{
        const del = await db.collection("list").deleteOne({ _id: new ObjectId(id) });
        res.send(del);
    }catch(err){
        res.send(err.message);
    }
};
export{addList,delList};