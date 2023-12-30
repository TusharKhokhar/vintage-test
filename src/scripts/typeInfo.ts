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
  const collection = db.collection("type_infos");
  const typeInfoScript = [
    {
      _id: new ObjectId("658bc433af7c1bd944177084"),
      id: "9879ad78-b87d-9edb-6b5a-489ad99e342e",
      type: "style",
      name: "Arts & Crafts",
      slug: "antique-vintage-arts-and-crafts-lighting-fixtures",
      sequence: "100",
      date_created: "2008-08-07 06:18:10",
      date_modified: "2010-12-09 11:02:36",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd944177085"),
      id: "58d8c064-8596-1c6e-3f9c-489ada665441",
      type: "style",
      name: "Spanish Revival",
      slug: "spanish-revival-antique-lighting-fixtures-vintage-lights",
      sequence: "200",
      date_created: "2008-08-07 06:18:36",
      date_modified: "2010-11-21 07:09:41",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd944177086"),
      id: "cd415859-0082-3c9d-43cf-489ada876ec1",
      type: "style",
      name: "Art Deco",
      slug: "art-deco-antique-vintage-lighting-fixtures",
      sequence: "300",
      date_created: "2008-08-07 06:19:02",
      date_modified: "2011-07-08 07:20:15",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd944177087"),
      id: "72340053-d06e-d459-68e3-489adac69524",
      type: "style",
      name: "Bungalow",
      slug: "antique-bungalow-lighting-fixtures-vintage-lighting",
      sequence: "400",
      date_created: "2008-08-07 06:19:19",
      date_modified: "2010-11-21 07:08:40",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd944177088"),
      id: "16d4e6a5-f180-8744-611e-489adae95f69",
      type: "year",
      name: "1885-1910",
      slug: "1885-1910-antique-lighting-fixtures-vintage-lights",
      sequence: "500",
      date_created: "2008-08-07 06:19:42",
      date_modified: "2010-11-21 07:09:27",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd944177089"),
      id: "a2e3d707-395d-545c-fab1-489ada3c9a0e",
      type: "year",
      name: "1910-1920",
      slug: "1910-1920-antique-lighting-fixture-vintage-lights",
      sequence: "600",
      date_created: "2008-08-07 06:20:03",
      date_modified: "2010-11-21 07:10:02",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd94417708a"),
      id: "ea2c0392-a6e7-2a88-b769-489adaf9da99",
      type: "year",
      name: "1920-1930",
      slug: "1920-1930-vintage-lighitng-fixtures-antique-lights",
      sequence: "700",
      date_created: "2008-08-07 06:20:19",
      date_modified: "2010-11-21 07:10:23",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd94417708b"),
      id: "627a43a7-338b-e06c-e37f-489ada7f4953",
      type: "year",
      name: "1930-1940",
      slug: "1930-1940",
      sequence: "800",
      date_created: "2008-08-07 06:20:36",
      date_modified: "2008-08-07 06:20:36",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd94417708c"),
      id: "1e0b7b77-418e-892c-3af7-489ada3a5311",
      type: "year",
      name: "1940+",
      slug: "1940-vintage-lighting-fixtures-antique-lights",
      sequence: "900",
      date_created: "2008-08-07 06:21:01",
      date_modified: "2010-11-21 07:10:43",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd94417708d"),
      id: "7e4671a3-36d3-acb2-e957-48ba7a2bed99",
      type: "style",
      name: "Victorian",
      slug: "victorian-antique-lighting-fixtures-vintage",
      sequence: "1000",
      date_created: "2008-08-31 06:02:46",
      date_modified: "2010-11-21 07:06:29",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd94417708e"),
      id: "945908cd-5a4e-bc8d-6b1c-48ba7a9466f9",
      type: "style",
      name: "Bathroom / Kitchen",
      slug: "antique-bathroom-lighting-vintage-bath-fixtures-antique-kitchen-lights",
      sequence: "1100",
      date_created: "2008-08-31 06:04:17",
      date_modified: "2011-04-28 09:22:26",
      deleted: "0",
    },
    {
      _id: new ObjectId("658bc433af7c1bd94417708f"),
      id: "abc38036-28be-2189-124e-48bfcf6fd127",
      type: "style",
      name: "Mid Century",
      slug: "mid-century-antique-lights-vintage-lighting-fixtures",
      sequence: "4100",
      date_created: "2008-09-04 07:09:18",
      date_modified: "2010-11-21 07:09:03",
      deleted: "0",
    },
  ];

  try {
    const result = await collection.insertMany(typeInfoScript);
    console.log(`${result.insertedCount} documents inserted.`);
  } catch (error) {
    console.error("Error occurred while inserting documents:", error);
  } finally {
    // Close the connection after insertion
    client.close();
  }
});
