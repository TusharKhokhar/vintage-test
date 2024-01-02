import { CollectionConfig } from "payload/types";

const Customers: CollectionConfig = {
  slug: "Customers",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
    },
    {
      name: "username",
      label: "User Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "address_1",
      label: "Address Line 1",
      type: "text",
    },
    {
      name: "address_2",
      label: "Address Line 2",
      type: "text",
    },
    {
      name: "city",
      label: "City",
      type: "text",
    },
    {
      name: "state",
      label: "state",
      type: "text",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
    },
    {
      name: "zip",
      label: "ZIP",
      type: "text",
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
    },
    {
      name: "notes",
      label: "Notes",
      type: "text",
    },
    {
      name: "is_active",
      label: "Is Active",
      type: "checkbox",
    },
    {
      name: "is_subscribed",
      label: "Is Subscribed",
      type: "checkbox",
    },
  ],
};

export default Customers;
