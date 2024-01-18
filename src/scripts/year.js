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
  const collection = db.collection("years");
  const yearScript = [
    {
      _id: ObjectId("658bc433af7c1bd944177088"),
      id: "16d4e6a5-f180-8744-611e-489adae95f69",
      type: "year",
      name: "1885-1910",
      slug: "1885-1910-antique-lighting-fixtures-vintage-lights",
      sequence: "500",
      deleted: "0",
      createdAt: "2008-08-07 06:19:42",
      updatedAt: "2010-11-21 07:09:27",
    },
    {
      _id: ObjectId("658bc433af7c1bd944177089"),
      id: "a2e3d707-395d-545c-fab1-489ada3c9a0e",
      type: "year",
      name: "1910-1920",
      slug: "1910-1920-antique-lighting-fixture-vintage-lights",
      sequence: "600",
      deleted: "0",
      createdAt: "2008-08-07 06:20:03",
      updatedAt: "2010-11-21 07:10:02",
    },
    {
      _id: ObjectId("658bc433af7c1bd94417708a"),
      id: "ea2c0392-a6e7-2a88-b769-489adaf9da99",
      type: "year",
      name: "1920-1930",
      slug: "1920-1930-vintage-lighitng-fixtures-antique-lights",
      sequence: "700",
      deleted: "0",
      createdAt: "2008-08-07 06:20:19",
      updatedAt: "2010-11-21 07:10:23",
    },
    {
      _id: ObjectId("658bc433af7c1bd94417708b"),
      id: "627a43a7-338b-e06c-e37f-489ada7f4953",
      type: "year",
      name: "1930-1940",
      slug: "1930-1940",
      sequence: "800",
      deleted: "0",
      createdAt: "2008-08-07 06:20:36",
      updatedAt: "2008-08-07 06:20:36",
    },
    {
      _id: ObjectId("658bc433af7c1bd94417708c"),
      id: "1e0b7b77-418e-892c-3af7-489ada3a5311",
      type: "year",
      name: "1940+",
      slug: "1940-vintage-lighting-fixtures-antique-lights",
      sequence: "900",
      deleted: "0",
      createdAt: "2008-08-07 06:21:01",
      updatedAt: "2010-11-21 07:10:43",
    },
  ];

  try {
    const result = await collection.insertMany(yearScript);
    console.log(`${result.insertedCount} documents inserted.`);
  } catch (error) {
    console.error("Error occurred while inserting documents:", error);
  } finally {
    // Close the connection after insertion
    client.close();
  }
});

// export { MongoClient, ObjectId };
