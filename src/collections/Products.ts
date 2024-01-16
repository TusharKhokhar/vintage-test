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
    },
    {
      name: "category_id",
      label: "Category Name",
      type: "relationship",
      relationTo: "category",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
    {
      name: "price",
      label: "Price",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
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
    {
      name: "style_id",
      label: "Style",
      type: "relationship",
      relationTo: "style",
    },
    {
      name: "year_id",
      label: "Year",
      type: "relationship",
      relationTo: "year",
    },
    {
      name: "free_shipping",
      type: "checkbox",
      label: "Free Shipping",
      defaultValue: false,
    },
    {
      name: "is_sold",
      type: "checkbox",
      label: "Is Sold",
      defaultValue: false,
    },
    {
      name: "is_featured",
      type: "checkbox",
      label: "Is Fearured",
      defaultValue: false,
    },
    {
      name: "is_active",
      type: "checkbox",
      label: "Is Active",
      defaultValue: false,
    },
    {
      name: "is_discount_excluded",
      type: "checkbox",
      label: "Is Discount Excluded",
      defaultValue: false,
    },
    {
      name: "delete",
      type: "checkbox",
      label: "Deleted",
      defaultValue: false,
    },
    {
      name: "additional_charges",
      type: "text",
      label: "Additional Charges",
    },
    {
      name: "product_images",
      label: "Product Images",
      type: "array",
      maxRows: 1,   
      fields: [
        {
          name: "prime_off",
          type: "upload",
          relationTo: "image",
        },
        {
          name: "prime_on",
          type: "upload",
          relationTo: "image",
        },
        {
          name: "other",
          type: "array",
          label: "Other",
          fields: [
            {
              name: "other",
              type: "upload",
              relationTo: "image",
            },
          ],
        },
      ],
    },
  ],
};
