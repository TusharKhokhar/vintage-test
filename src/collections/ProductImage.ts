import { CollectionConfig } from "payload/types";

export const ProductImage: CollectionConfig = {
  slug: "image",
  upload: {
    staticURL: "/assets",
    staticDir: "assets",
    disableLocalStorage: true,
  },
  admin: {
    hidden: true
  },
  fields: [
    {
      name: "url",
      type: "text",
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://com-vlights.s3.amazonaws.com/test/${doc.filename}`,
        ],
      },
    },
  ],
};