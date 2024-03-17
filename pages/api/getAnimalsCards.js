import { getAnimals } from './db';

export default async function handler(req, res) {

    let sqliteObj = await getAnimals();
    //console.log("getAnimalsCards: ", sqliteObj);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(sqliteObj));
}