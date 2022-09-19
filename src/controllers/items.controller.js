import { albums } from '../database/albums.js';
import db from '../database/db.js';

async function showItems(req, res){ 
    try {
        const albumsCollection = await db.collection('albums').insertMany(albums);
        res.send(albums);
        return;

    } catch (error) {
        return console.log(error.error);
    }
} 


export {
    showItems,
}