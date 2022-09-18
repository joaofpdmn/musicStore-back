import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient("mongodb+srv://<username>:<password>@musicstorecluster.ykv1vl7.mongodb.net/?retryWrites=true&w=majority");

try {
    await mongoClient.connect();
} catch (error) {
    console.log(error.message);
}

const db = mongoClient.db("musicstore");

export default db;
