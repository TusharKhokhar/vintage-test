import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import { Products } from "./collections/Products";

const mockModulePath = path.resolve(__dirname, "mocks", "emptyFunction.ts");

export default buildConfig({
  serverURL: `http://ec2-15-207-19-130.ap-south-1.compute.amazonaws.com`,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [".js", "jsx", ".ts", ".tsx"],
        alias: {
          ...config.resolve.alias,
          fs: mockModulePath,
        },
      },
    }),
  },
  editor: slateEditor({}),
  collections: [Users, Products],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  cors: 'http://localhost:3000'
    ? 'http://localhost:3000'.split(",")
    : [],
  csrf: 'http://localhost:3000'
    ? 'http://localhost:3000'.split(",")
    : [],
  graphQL: {
    // schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disable: true,
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: `mongodb+srv://savaliyahiren809:Thwr6TzVHHAhwB4x@cluster0.xhjhygq.mongodb.net/vintage-test?retryWrites=true&w=majority`,
  }),
});
