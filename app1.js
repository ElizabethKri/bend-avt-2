const collection = db.collection("users");
count = await collection.countDocuments();
console.log(`В коллекции users ${count} документа/ов`);