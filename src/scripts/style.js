const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/./../../.env") });

const url = process.env.DATABASE_URI;
const dbName = "admin";

const client = new MongoClient(url);

client.connect(async function (err) {
  if (err) {
    console.error("Error occurred while connecting to MongoDB:", err);
    return;
  }

  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("styles");
  const categoryScript = [
    
      {
        _id: ObjectId("658bc433af7c1bd944177084"),
        id: "9879ad78-b87d-9edb-6b5a-489ad99e342e",
        type: "style",
        name: "Arts & Crafts",
        slug: "antique-vintage-arts-and-crafts-lighting-fixtures",
        sequence: "100",
        deleted: "0",
        createdAt: "2008-08-07 06:18:10",
        updatedAt: "2010-12-09 11:02:36",
      },
      {
        _id: ObjectId("658bc433af7c1bd944177085"),
        id: "58d8c064-8596-1c6e-3f9c-489ada665441",
        type: "style",
        name: "Spanish Revival",
        slug: "spanish-revival-antique-lighting-fixtures-vintage-lights",
        sequence: "200",
        deleted: "0",
        createdAt: "2008-08-07 06:18:36",
        updatedAt: "2010-11-21 07:09:41",
      },
      {
        _id: ObjectId("658bc433af7c1bd944177086"),
        id: "cd415859-0082-3c9d-43cf-489ada876ec1",
        type: "style",
        name: "Art Deco",
        slug: "art-deco-antique-vintage-lighting-fixtures",
        sequence: "300",
        deleted: "0",
        createdAt: "2008-08-07 06:19:02",
        updatedAt: "2011-07-08 07:20:15",
      },
      {
        _id: ObjectId("658bc433af7c1bd944177087"),
        id: "72340053-d06e-d459-68e3-489adac69524",
        type: "style",
        name: "Bungalow",
        slug: "antique-bungalow-lighting-fixtures-vintage-lighting",
        sequence: "400",
        deleted: "0",
        createdAt: "2008-08-07 06:19:19",
        updatedAt: "2010-11-21 07:08:40",
      },
      {
        _id: ObjectId("658bc433af7c1bd94417708d"),
        id: "7e4671a3-36d3-acb2-e957-48ba7a2bed99",
        type: "style",
        name: "Victorian",
        slug: "victorian-antique-lighting-fixtures-vintage",
        sequence: "1000",
        deleted: "0",
        createdAt: "2008-08-31 06:02:46",
        updatedAt: "2010-11-21 07:06:29",
      },
      {
        _id: ObjectId("658bc433af7c1bd94417708e"),
        id: "945908cd-5a4e-bc8d-6b1c-48ba7a9466f9",
        type: "style",
        name: "Bathroom / Kitchen",
        slug: "antique-bathroom-lighting-vintage-bath-fixtures-antique-kitchen-lights",
        sequence: "1100",
        deleted: "0",
        createdAt: "2008-08-31 06:04:17",
        updatedAt: "2011-04-28 09:22:26",
      },
      {
        _id: ObjectId("658bc433af7c1bd94417708f"),
        id: "abc38036-28be-2189-124e-48bfcf6fd127",
        type: "style",
        name: "Mid Century",
        slug: "mid-century-antique-lights-vintage-lighting-fixtures",
        sequence: "4100",
        deleted: "0",
        createdAt: "2008-09-04 07:09:18",
        updatedAt: "2010-11-21 07:09:03",
      },    
  ];

  try {
    const result = await collection.insertMany(categoryScript);
    console.log(`${result.insertedCount} documents inserted.`);
  } catch (error) {
    console.error("Error occurred while inserting documents:", error);
  } finally {
    // Close the connection after insertion
    client.close();
  }
});

// export { MongoClient, ObjectId };