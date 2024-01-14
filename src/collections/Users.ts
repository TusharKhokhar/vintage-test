import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel } from "../aceess/isAdmin";
import { isAdminOrSelf } from "../aceess/isAdminOrSelf";

const User: CollectionConfig = {
  slug: "user",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      admin:{
        description:" Enter the full name of the user. This will be used for identification purposes"
      }
    },
    {
      name: "roles",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["editor"],
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Read only",
          value: "editor",
        },
      ],
      admin:{
        description:"Assign a role to the user. Roles define their permissions and access levels on the website (e.g., Admin, Read Only)."
      }
    },
  ],
};

export default User;
