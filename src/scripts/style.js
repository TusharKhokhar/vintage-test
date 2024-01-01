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
      _id: new ObjectId("65893d98d29bf691f1ec85c9"),
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
      date_created: "2008-08-07 06:05:31",
      date_modified: "2010-12-09 10:38:58",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85ca"),
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
      date_created: "2008-08-07 06:08:06",
      date_modified: "2010-12-09 10:41:02",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85cb"),
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
      date_created: "2008-08-07 06:11:28",
      date_modified: "2010-12-08 08:12:32",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85cc"),
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
      date_created: "2008-08-07 06:14:55",
      date_modified: "2010-12-08 07:28:38",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85cd"),
      id: "11",
      name: "Sets",
      slug: "sets-vintage-and-antique-lighting-fixtures-and-lights",
      extn: ".jpg",
      description:
        "Matching antique and vintage lighting fixtures for the entire house or just a few rooms.",
      is_active: true,
      page_title: "Restored Vintage Lighting | restored antique lighting",
      meta_description:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      keywords:
        "Vintage lights, Antique lights, Antique lighting, Vintage lighting, Arts & Crafts, Bungalow, Lamps, American, Architecturial salvage, Restored, Vintage, Antique Light Fixtures. Old Lighting, Arts & Crafts, Spanish Revival, Bungalow, Craftsman. Restored Chandeliers, Table lamp, slip shade, Wall Sconces, Porch Lights, renovation, restoration, remodel",
      sequence: "701",
      date_created: "2008-08-23 01:31:18",
      date_modified: "2010-12-09 10:43:04",
      deleted: true,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85ce"),
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
      date_created: "2008-08-23 01:32:57",
      date_modified: "2010-12-10 05:06:32",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85cf"),
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
      date_created: "2008-08-23 01:45:57",
      date_modified: "2012-05-28 12:09:57",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d0"),
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
      date_created: "2008-10-01 07:25:09",
      date_modified: "2018-03-25 14:10:52",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d1"),
      id: "91f0cfbf-d17c-41e5-95ed-48cd90d50fcd",
      name: "sets",
      slug: "sets",
      extn: "",
      description: "",
      is_active: true,
      page_title: "",
      meta_description: "",
      keywords: "",
      sequence: "701",
      date_created: "2008-09-14 22:29:55",
      date_modified: "2008-09-14 22:30:44",
      deleted: true,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d2"),
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
      date_created: "2009-01-17 14:15:43",
      date_modified: "2011-09-22 09:01:48",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d3"),
      id: "80628d8f-364d-a8d3-46b4-4a2557b518ee",
      name: "Related Items",
      slug: "related-items",
      extn: "",
      description: "",
      is_active: true,
      page_title: "",
      meta_description: "",
      keywords: "",
      sequence: "901",
      date_created: "2009-06-02 09:45:48",
      date_modified: "2009-06-02 09:46:17",
      deleted: true,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d4"),
      id: "69c776fb-800f-5457-d413-4d0123706689",
      name: "sets",
      slug: "restored-sets-of-antique-lighting",
      extn: "",
      description: "",
      is_active: false,
      page_title: "",
      meta_description: "",
      keywords: "",
      sequence: "1001",
      date_created: "2010-12-09 10:44:04",
      date_modified: "2010-12-09 10:44:04",
      deleted: true,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d5"),
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
      date_created: "2010-12-09 10:45:34",
      date_modified: "2010-12-15 07:58:10",
      deleted: false,
    },
    {
      _id: new ObjectId("65893d98d29bf691f1ec85d6"),
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
      date_created: "2013-12-16 05:14:24",
      date_modified: "2014-05-28 05:58:19",
      deleted: false,
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
