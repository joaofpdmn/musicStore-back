import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient("mongodb+srv://driven:HN08w9IgV9AJ1Zle@musicstorecluster.ykv1vl7.mongodb.net/?retryWrites=true");

try {
    await mongoClient.connect();
} catch (error) {
    console.log(error.message);
}

const db = mongoClient.db("musicstore");

export default db;
