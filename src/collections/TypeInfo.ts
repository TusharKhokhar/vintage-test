import { CollectionConfig } from "payload/types";

export const TypeInfo: CollectionConfig = {
  slug: "type_infos",
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
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: "Year",
          value: "year",
        },
        {
          label: "Style",
          value: "style",
        },
      ],
    },
  ],
};
