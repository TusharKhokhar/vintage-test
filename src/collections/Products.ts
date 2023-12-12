import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  fields: [
    {
      name: "publishDate",
      label: "Publish Date",
      type: "date",
    },
    {
      name: "productname",
      label: "Product Name",
      type: "text",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
    {
      name: "CategoryName",
      label: "Category Name",
      type: "select",
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "Celling",
          value: "celling",
        },
        {
          label: "WALL",
          value: "wall",
        },
        {
          label: "NEWS",
          value: "news",
        },
      ],
    },
    {
      name: "style",
      label: "Style",
      type: "select",
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "Arts & Crafts",
          value: "arts_crafts",
        },
        {
          label: "Art Deco",
          value: "art_deco",
        },
        {
          label: "Mid Century",
          value: "mid_century",
        },
      ],
    },
    {
      name: "freeShipping", // required
      type: "checkbox", // required
      label: "Free Shipping",
      defaultValue: false,
    },
    {
      name: "description", // required
      type: "textarea", // required
      label: "Description",
    },
    {
      name: "price", // required
      type: "number", // required
      label: "Price in USD",
      required: true,
      admin: {
        step: 10,
      },
    },
  ],
};
