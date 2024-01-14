import { CollectionConfig } from "payload/types";

const Category: CollectionConfig = {
  slug: "category",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Category Name",
      type: "text",
      admin:{
        description:"Specify the name of the category. This helps organize and classify products on your site."
      }
    },
    {
      name: "date_created",
      label: "Date Created",
      type: "date",
      defaultValue:new Date().toISOString().split('T')[0],
      admin:{
        description:"Select the date. Shows when the category was initially created.",
        position:"sidebar"
      }
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin:{
        description:"A unique identifier for the category. Can be the same as the category name"
      }
    },
    {
      name: "date_modified",
      label: "Date Modified",
      type: "date",
      defaultValue:new Date().toISOString().split('T')[0],
      admin:{
        description:"Select the date. Shows the last modification date of the category.",
        position:"sidebar"
      }
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      admin:{
        description:" Provide a brief description of the category. This gives users an idea of the products it contains"
      }
    },
    {
      name: "is_active",
      label: "Is Active",
      type: "checkbox",
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "extn",
      label: "Extn",
      type: "text",
      admin:{
        description:"Enter the file extension"
      }
    },
    {
      name: "page_title",
      label: "Page Title",
      type: "text",
      admin:{
        description:"Create a title for the category page. This can improve search engine results. This does not appear on the website (up to 70 characters only)."
      }
    },
    {
      name: "meta_description",
      label: "Meta Description",
      type: "text",
      admin:{
        description:"Write a concise summary for the category. This aids in search engine optimization. This does not appear on the website (up to 160 characters only)."
      }
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
      admin:{
        description:"Specify relevant keywords for the category, separated by commas. This assists in SEO efforts. This does not appear on the website",
        position:"sidebar"
      }
    },
  ],
};

export default Category;
