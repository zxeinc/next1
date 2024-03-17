import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  const db = await open({
    filename: './data.sqlite',
    driver: sqlite3.Database,
  });
  await db.exec('CREATE TABLE IF NOT EXISTS animals (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, lossPlace TEXT, photo TEXT)');
  return db;
}

export async function insertAnimal(name, lossPlace, photo) {
  const db = await openDB();
  await db.run('INSERT INTO animals (name, lossPlace, photo) VALUES (?, ?, ?)', name, lossPlace, photo);
}

export async function getAnimals() {
  const db = await openDB();
  const animals = await db.all('SELECT * FROM animals');
  //console.log(JSON.stringify(animals));
  return animals;
}