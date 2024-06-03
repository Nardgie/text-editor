import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  //TODO: Add logic for a method that adds content to the database
export const addToDb = async (content) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.put({ id: 1, value: content })
  const result = await req;
  console.log('Content added to the database', result);
};
export const putDb = async (content) => 
console.error('putDb not implemented');

export const getAllFromDb = async () => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const req = await store.getAll();
  const content = await req;
  return content;
};
export const getDb = async () => console.error('getDb not implemented');

initdb();
