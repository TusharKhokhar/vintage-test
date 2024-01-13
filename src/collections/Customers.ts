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
      admin:{
        description:"Enter the customer's first name."
      }
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      admin:{
        description:"Enter the customer's last name"
      }
    },
    {
      name: "username",
      label: "User Name",
      type: "text",
      admin:{
        description:"Same as the email of the customer."
      }
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      admin:{
        description:"Input the customer's email address. This serves as their primary contact and login identifier."
      }
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      admin: {
        readOnly: true,
        description:" Set a secure password for the customer's account. Make sure to include a number, and an upper case, lower case letter, with a special symbol."
      },
    },
    {
      name: "address_1",
      label: "Address Line 1",
      type: "text",
      admin:{
        description:"Enter the first line of the customer's address."
      }
    },
    {
      name: "address_2",
      label: "Address Line 2",
      type: "text",
      admin:{
        description:"Optionally, provide a second line of the customer's address."
      }
    },
    {
      name: "city",
      label: "City",
      type: "text",
      admin:{
        description:"Specify the city where the customer is located"
      }
    },
    {
      name: "state",
      label: "state",
      type: "text",
      admin:{
        description:"Enter the state or region of the customer's address"
      }
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      admin:{
        description:" Select the customer's country from a dropdown list."
      }
    },
    {
      name: "zip",
      label: "ZIP",
      type: "text",
      admin:{
        description:"Enter the postal or ZIP code of the customer's address."
      }
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      admin:{
        description:"Input the customer's primary phone number including the country code. (ex: +1-xxx)"
      }
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
      admin:{
        description:" Provide the customer's mobile or secondary phone number including the country code. (ex: +1-xxx-xxx-xxxx)"
      }
    },
    {
      name: "notes",
      label: "Notes",
      type: "text",
      admin:{
        description:"Add any additional notes or comments related to the customer, if necessary.cd v"
      }
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
