const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/./../../.env") });

const url = process.env.DATABASE_URI;
const dbName = "vintage_prod";

async function removeDeletedItems(tableName) {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("test");

    const deleteResult = await collection.deleteMany({ deleted: true });
    console.log(`${deleteResult.deletedCount} documents deleted in ${tableName}.`);
  } catch (error) {
    console.error(`Error occurred while removing documents from ${tableName}:`, error);
  } finally {
    client.close();
  }
}

// Usage example:
const tableName = "categories"; // Replace this with the desired table name
removeDeletedItems(tableName);
