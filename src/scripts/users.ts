const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/./../../.env") });


const url = process.env.DATABASE_URI;
const dbName = "vintagelights";

const client = new MongoClient(url);
client.connect(async function (err) {
  if (err) {
    console.error("Error occurred while connecting to MongoDB:", err);
    return;
  }

  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("admin_users");
  const adminScript = [
    {
      _id: ObjectId("658e67606a7faaf45f5f315b"),
      name: "Tushar",
      roles: ["admin"],
      email: "khokhartushar15@gmail.com",
      salt: "0022ac1c650acd52db17a05de0052da6b1d599fb66f309a9c6ee7615e2fa3efa",
      hash: "f442b3ccfa91bc03f92520a33c834dc25b092ee8443cfc2c66baa956d8b58ea5b61f28e1cdb30cdb7d9912fe9b4190ec436029e86bf72b3bfb212f455d3dfa6961e74aca9e2794bd19ba0d054f312882307098cf4bf27923685e7bff7a768718df7dbf03a7375fb057c719c1cffef07ed8370e61a3f0aff3f8960578927a946036121c9ea22e375ad997d0fea0df94368b5f9bece7e4bf6ec37bc5f3fb76541f582663bcecf46eeb747734a41518fd444c07f28721a4c0395da60bc186919447623a46d719b96e39df8b3af47e74c72702275ef8c13f7c68c3acc7f0a273a5ae16fe52512d2ab1015afb3e9abfa7fd23c722b6ad02a3fc3c7c24d8fa2d63ac728a361bd11424cae9faa4af845df665e685b1c77d9606846a41dc19764080646fc4903c1a900439d81642ee1facb3dc8028c50ee9072c3c9e003cff9f41ed16b737b55fa3425e6ee9d3828f2e24d12050f4dd98d76163371c5b2f85570cab211058d05909da6cf4714cb9abc33b48ce8bbb1e6864083e33d918a4f5f1f5fc2b7a6b4ae27f4dcb6af73296c4cab3f859ac3501a52d5a016af479fc04cea6cd286e5b273465b4efe69be12b8e373194d200268828613b7e1cf6721c8a413df241cc692138331a3fab8740a89172d976fdd43f7a340bdce533cf21f2bc4cc67c4e5ac0cb05eff06e67a33a517a7feb65831285051c86ece9bbffada2d404595d4af7",
      loginAttempts: 0,
      createdAt: {
        $date: "2023-12-29T06:29:52.795Z",
      },
      updatedAt: {
        $date: "2023-12-29T06:44:05.575Z",
      },
      __v: 0,
      lockUntil: null,
    },
    {
      _id: ObjectId("658e67a46a7faaf45f5f3177"),
      name: "hiren",
      roles: ["editor"],
      email: "hirenpatel809@gmail.com",
      salt: "ff9ee30ea4335e4cee0287f0b29339aa12ed71ad1d36eb8d9d17444250a85620",
      hash: "b05674b143218c09790a5a299c47a85e4841a5d74bedb33000d13da6328732f0093fd185a052edaaf53a4209869f711eaa337552c51459dcb4f6ac2bbea96f93366ba8fc14b3c7cabe47d3660f8801ee6fc14e8cf815d1873d560bcff735cf3846e063c5f9a453d3e7c3f1ce1217f1c19a66aae278e2b18b3496e8830d81bfbc1097a2f33dbc455785516e48774ac827349635b137b6be82cf2c75775f335d84e5caff50068358a36545bd05e5ac32b9aa352c0d3710de3f9e6b70af430928bc57c757dbc54039e540371e638e5cbb6f364e22a4484d4efb05db5f0651d3db6b1a0f871e5110e8d432256dcc8a812d7b84db601035f6e0d6d17b442944b5031522bfec4eb39064ad4d6eafb5f829822a2715ac4d23f5785d3aa7574df8b6da2a9aeaa4c4308fd54d71068ada604ddbbe37bc722bafeb79e48a6885b7481fc3fcaea6242dac0010fcf72d61bec919922ed69b329e998a663352736346c66840a655dbaf98d973fce53344d5e16017d12a305f699bf16c7a99a73251433adc09d7f3985a7ace75714b8319fa1e83ba392dde208b7589beaf3726ca97e84985c702e67d4fb3c8b427ff3402002ff884684155b0360ed302e9b97d856279e62d181e57b2b38108fdde6a45401ac2e267befd0f0d2121939d21dd0a1a401258996e8fdb178de54ec50fa057da7951036187eacf236e8c365b5f602574d969434707e7",
      loginAttempts: 0,
      createdAt: {
        $date: "2023-12-29T06:31:00.869Z",
      },
      updatedAt: {
        $date: "2023-12-29T06:34:01.196Z",
      },
      __v: 0,
      lockUntil: null,
    },
  ];

  try {
    const result = await collection.insertMany(adminScript);
    console.log(`${result.insertedCount} documents inserted.`);
  } catch (error) {
    console.error("Error occurred while inserting documents:", error);
  } finally {
    // Close the connection after insertion
    client.close();
  }
});
