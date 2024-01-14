import { CollectionConfig } from "payload/types";
import { isAdmin } from "../aceess/isAdmin";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      label: "Product Name",
      type: "text",
      admin:{
        description:"Enter the name of the product. This will be displayed on our website"
      }
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      admin:{
        description:"Provide a detailed description of the product. Highlight key features and benefits."
      }
    },
    {
      name: "category_id",
      label: "Category Name",
      type: "relationship",
      relationTo: "category",
      admin:{
        description:"Select the appropriate category for the product. This helps organize products on your site."
      }
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin:{
        description:"A unique identifier for the product. Keep it short, starting with '/' separated by '-'. Ex: If the product name is: 1980s Vintage lamp, then the slug will be entered this way: /1980s-vintage-lamp"
      }
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      admin:{
        description:"Set the price of the product. Use numerical values only, without symbols."
      }
    },
    
    {
      name: "page_title",
      label: "Page Title",
      type: "text",
      admin:{
        description:"Create a compelling title for the product page. This will appear in search engine results. This won't be visible on the website (up to 70 characters).",
        position:"sidebar"
      }
    },
    {
      name: "meta_description",
      label: "Meta Description",
      type: "text",
      admin:{
        description:"Write a brief and engaging summary of the product. This helps improve search engine visibility. This won't be visible on the website (up to 160 characters)."
      }
    },
    
    {
      name: "style_id",
      label: "Style",
      type: "relationship",
      relationTo: "style",
      admin:{
        description:"Specify the style or design attributes of the product. This helps customers find items with similar aesthetics. You can select multiple."
      }
    },
    {
      name: "year_id",
      label: "Year",
      type: "relationship",
      relationTo: "year",
      admin:{
        description:"Indicate the manufacturing or release year of the product."
      }
    },
    {
      name: "free_shipping",
      type: "checkbox",
      label: "Free Shipping",
      defaultValue: false,
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "is_sold",
      type: "checkbox",
      label: "Is Sold",
      defaultValue: false,
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "is_featured",
      type: "checkbox",
      label: "Is Featured",
      defaultValue: false,
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "is_active",
      type: "checkbox",
      label: "Is Active",
      defaultValue: false,
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "is_discount_excluded",
      type: "checkbox",
      label: "Is Discount Excluded",
      defaultValue: false,
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "delete",
      type: "checkbox",
      label: "Deleted",
      defaultValue: false,
      admin:{
        position:"sidebar"
      }
    },
    {
      name: "additional_charges",
      type: "text",
      label: "Additional Charges",
      admin:{
        description:"If applicable, input any extra costs associated with the product, such as shipping or handling fees"
      }
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
      admin:{
        description:"Enter relevant keywords separated by commas. This aids in search engine optimization. This won't be visible on the website.",
        position:"sidebar"
      }
    },
  ],
};
