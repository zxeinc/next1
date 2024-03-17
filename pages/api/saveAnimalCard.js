import fs from 'fs';
import { insertAnimal } from './db';

export default function handler(req, res) {
    const data = req.body; // Ваши данные для сохранения
    
    // fs.writeFile('data.json', JSON.stringify(data), (err) => {
    //     if (err) {
    //         res.status(500).json({ error: 'Failed to save data' });
    //     } else {
    //         res.status(200).json({ message: 'Data saved successfully' });
    //     }
    // });

    let name = data.name;
    let lossPlace = data.lossPlace;
    let photo = data.photo.file;

    insertAnimal(name, lossPlace, photo);
}
