import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(MONGO_URI);

try {
    await mongoClient.connect();
} catch (error) {
    console.log(error.message);
}

const db = mongoClient.db("musicstore");

export default db;
