import path from "path";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import User from "./collections/Users";
import Category from "./collections/Category";
import { ProductStyle } from "./collections/ProductStyle";
import { ProductYear } from "./collections/ProductYear";
import { Products } from "./collections/Products";
import Customers from "./collections/Customers";
import { Orders } from "./collections/Orders";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { ProductImage } from "./collections/ProductImage";

const mockModulePath = path.resolve(__dirname, "mocks", "emptyFunction.ts");

const adapter = s3Adapter({
  config: {
    forcePathStyle: true,
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY || "",
      secretAccessKey: process.env.S3_SECRET_KEY || "",
    },
  },
  bucket: process.env.S3_BUCKET_NAME || "",
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: User.slug,
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [".js", "jsx", ".ts", ".tsx"],
        alias: {
          ...config.resolve?.alias,
          fs: mockModulePath,
        },
      },
    }),
  },
  editor: slateEditor({}),
  collections: [
    User,
    Category,
    ProductStyle,
    ProductYear,
    Products,
    Customers,
    Orders,
    ProductImage,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  cors: process.env.WHITELIST_ORIGINS
    ? process.env.WHITELIST_ORIGINS.split(",")
    : [],
  csrf: process.env.WHITELIST_ORIGINS
    ? process.env.WHITELIST_ORIGINS.split(",")
    : [],
  graphQL: {
    // schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disable: true,
  },
  plugins: [
    cloudStorage({
      collections: {
        image: {
          prefix: "product-images",
          adapter,
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
});
