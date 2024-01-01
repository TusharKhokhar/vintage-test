import { CollectionConfig } from "payload/types";

const Category: CollectionConfig = {
  slug: "category",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: "name",
      label: "Category Name",
      type: "text",
    },
    {
      name: "date_created",
      label: "Date Created",
      type: "date",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
    {
      name: "date_modified",
      label: "Date Modified",
      type: "date",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    {
      name: "is_active",
      label: "Is Active",
      type: "checkbox",
    },
    {
      name: "extn",
      label: "Extn",
      type: "text",
    },
    {
      name: "page_title",
      label: "Page Title",
      type: "text",
    },
    {
      name: "meta_description",
      label: "Meta Description",
      type: "text",
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
    },
  ],
};

export default Category;
