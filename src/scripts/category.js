const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/./../../.env") });

function convertArrayToObjectId(script) {
  return script.map((item) => {
    const id = item._id.$oid;

    return {
      ...item,
      _id: new ObjectId(`${id}`),
    };
  });
}

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
  const collection = db.collection("categories");
  const categoryScript = [
    {
      _id: { $oid: "65893d98d29bf691f1ec85c9" },
      id: "1520566f-4d96-6dcb-7e50-489ad68db5e0",
      name: "Wall ",
      slug: "antique-vintage-lighting-wall-fixtures",
      extn: ".jpg",
      description: "antique lighting fixtures wall sconces",
      is_active: true,
      page_title:
        "antique sconce | antique wall lighting | vintage sconce | sconce light",
      meta_description:
        "Restored Vintage and Antique Porch Light Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      keywords:
        "Restored Vintage and Antique Porch Light Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      sequence: "1",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85ca" },
      id: "e81b85fb-73ff-7045-b27f-489ad77387ea",
      name: "Ceiling ",
      slug: "vintage-ceiling-light-fixtures-antique",
      extn: ".jpg",
      description:
        "Restored Vintage and Antique Chandelier Light Fixtures for Home or House Renovation, Restoration",
      is_active: true,
      page_title:
        "chandelier | antique ceiling lighting | vintage ceiling lighting fixture",
      meta_description:
        "Restored Vintage and Antique Light Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      keywords:
        "Restored Vintage and Antique Light Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      sequence: "101",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85cb" },
      id: "9f0f6ef8-95b8-e721-838e-489ad8a6e08e",
      name: "Porch ",
      slug: "restored-antique-porch-lighting-vintage-fixtures",
      extn: ".jpg",
      description:
        "Restored Vintage and Antique Porch Light Fixtures for Home & House Restoration or Renovation.  Rewired and ready to install.",
      is_active: true,
      page_title:
        "antique porch light | vintage outdoor lighting | antique lighting fixture ",
      meta_description:
        "Restored Vintage and Antique Light Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      keywords:
        "Restored Vintage and Antique Porch Light Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      sequence: "201",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85cc" },
      id: "b9f6051f-ed72-4a0c-4d5f-489ad9954012",
      name: "Table ",
      slug: "antique-and-vintage-table-lighting-fixtures",
      extn: ".jpg",
      description:
        "Antique and vintage table lighting fixtures.  All antique and vintage light fixtures restored and rewired.",
      is_active: true,
      page_title: "Antique Table Lamp | vintage table lamp | antique lighting",
      meta_description:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      keywords:
        "Restored Vintage and Antique Table Light Lamp Fixtures. Old Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman. Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights for renovation, restoration",
      sequence: "301",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85ce" },
      id: "daa273f6-cae3-2592-eca7-48afaf779648",
      name: "Shades",
      slug: "antique-lighting-shades-for-vinatge-light-fixtures",
      extn: ".jpg",
      description:
        "antique and vintage lighting fixture shades for remodel, restoration, or renovation.  All styles from Arts & Crafts to Mid-Century Moderne.",
      is_active: true,
      page_title: "antique shades | vintage shades | replacement shades",
      meta_description:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      keywords:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      sequence: "401",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85cf" },
      id: "2",
      name: "Related Items",
      slug: "related-items",
      extn: ".jpg",
      description:
        "Stained Glass Church Doors & other vintage and antique items we have found in our travels which go well with antique and vintage lighting.                                                                                                    Real architectural salvage that add real charm to a vintage remodel.  \r\n",
      is_active: true,
      page_title: "architectural salvage | antique lights | restoration",
      meta_description:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      keywords:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      sequence: "601",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85d0" },
      id: "93462665-6aba-ea83-93ab-48e388972ae4",
      name: "As Found",
      slug: "as-found",
      extn: "",
      description:
        "Bathroom Lighting \r\nRestored Vintage and Antique Light Fixtures and related artifacts for house restoration",
      is_active: false,
      page_title:
        "Bathroom lighitng Restored Vintage lighting and Antique Light Fixtures",
      meta_description:
        "Bathroom lighting, Restored Vintage and Antique Light Fixtures.  Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman.  Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights. ",
      keywords:
        "Bathroom lighting, Restored Vintage lighting and Antique Lighting Fixtures.  Lighting for Arts & Crafts, Spanish Revival, Bungalow and Craftsman.  Restored Chandeliers, Table Lamps, Wall Sconces, and Porch Lights. ",
      sequence: "801",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85d2" },
      id: "a9da072b-729a-2229-a297-497258d99213",
      name: "Slip Shades",
      slug: "slip-shades-vintage-antique-light-fixtures-vintage-wall-sconces",
      extn: ".jpg",
      description:
        "Slip shades for vintage antique light fixtures and vintage wall sconces",
      is_active: true,
      page_title: "Slip shade | antique lighting | vintage light fixtures",
      meta_description:
        "Slip shades, vintage, antique light fixtures, wall sconces, vintage lighting fixtures, art deco, arts & crafts,",
      keywords:
        "Slip shades, vintage, antique light fixtures, antique wall sconces, vintage lighting fixtures, vintage wall sconces, art deco, art nouveau, arts crafts,  ",
      sequence: "501",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85d5" },
      id: "1",
      name: "Sets",
      slug: "sets",
      extn: ".jpg",
      description:
        "Matching antique and vintage lighting fixtures for the entire house or just a few room.  Sets of restored vintage and antique lighitng fixtures",
      is_active: true,
      page_title: "restored antique lighting | restored vintage lighting",
      meta_description: "restored vintage and antique lighitng fixtures lights",
      keywords:
        "sets restored vintage lighting, sets vintage lighting fixtures",
      sequence: "701",
      deleted: "0",
    },
    {
      _id: { $oid: "65893d98d29bf691f1ec85d6" },
      id: "2dc17d69-572e-aea1-21b2-52aefc391ce9",
      name: "NEWS",
      slug: "news",
      extn: ".jpg",
      description: "",
      is_active: false,
      page_title: "",
      meta_description: "",
      keywords: "",
      sequence: "1101",
      deleted: "0",
      updatedAt: "2014-05-28T00:28:19.000Z",
      createdAt: "2013-12-15T23:44:24.000Z",
    },
  ];

  const Categories = convertArrayToObjectId(categoryScript);

  try {
    const result = await collection.insertMany(Categories);
    console.log(`${result.insertedCount} documents inserted.`);
    // const deleteResult = await collection.deleteMany({ deleted: true });
    // console.log(`${deleteResult.deletedCount} documents deleted.`);
  } catch (error) {
    console.error("Error occurred while inserting documents:", error);
  } finally {
    // Close the connection after insertion
    client.close();
  }
});
