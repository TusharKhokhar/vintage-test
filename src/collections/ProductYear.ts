import { CollectionConfig } from "payload/types";

export const ProductYear: CollectionConfig = {
  slug: "year",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "date_created",
      label: "Publish Date",
      type: "date",
    },
    {
      name: "date_modified",
      label: "Update At",
      type: "date",
    },
    {
      name: "type",
      label: "Type",
      type: "text",
    },
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
  ],
};
