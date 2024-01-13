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
      admin:{
        description:" Select the date. Displays the date when the style was initially published"
      }
    },
    {
      name: "date_modified",
      label: "Update At",
      type: "date",
      admin:{
        description:"Select the date. Shows the last modification date of the style."
      }
    },
    {
      name: "type",
      label: "Type",
      type: "text",
      admin:{
        description:"Enter the type of the style of the product."
      }
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      admin:{
        description:"Specify a name for the style. This helps identify and categorize different design aesthetics."
      }
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin:{
        description:"A unique identifier for the style. Keep it short, separated by '-'"
      }
    },
  ],
};
