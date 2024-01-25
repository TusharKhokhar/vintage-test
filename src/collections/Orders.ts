import { CollectionConfig } from "payload/types";
import { isAdmin } from "../aceess/isAdmin";

export const Orders: CollectionConfig = {
  slug: "orders",
  access: {
    create: () => false,
    delete: isAdmin,
  },
  fields: [
    {
      name: "customer_id",
      label: "Customer Id",
      type: "relationship",
      relationTo: "Customers",
      admin: {
        hidden: true,
      },
    },
    {
      name: "customer_name",
      label: "Customer Name",
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "customer_email",
      label: "Customer Email",
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "billing_address",
      label: "Billing Address",
      type: "textarea",
      hooks: {
        afterRead: [
          ({ data }) => {
            return `${data.customer_name}\n${data.billing_address1}\n\n${data.billing_city}\n${data.billing_state}\n${data.billing_country}\n${data.shipping_zip}\n${data.customer_email}`;
          },
        ],
      },
    },
    {
      name: "shipping_address",
      label: "Shipping Address",
      type: "textarea",
      hooks: {
        afterRead: [
          ({ data }) => {
            return `${data.customer_name}\n${data.shipping_address1}\n\n${data.billing_city}\n${data.billing_state}\n${data.billing_country}\n${data.shipping_zip}\nShipping type: ${data.shipping_type}`;
          },
        ],
      },
    },
    {
      name: "cart_order_id",
      label: "Order Id",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "order_date",
      label: "Order Date",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "paid_date",
      label: "Paid Date",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "item_total",
      label: "Item Total",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "shipping_amount",
      label: "Shipping Amount",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "promo_discount",
      label: "Promo Discount",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "order_total",
      label: "Order Total",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "customer_comments",
      label: "Customer Comments",
      type: "textarea",
    },
    {
      name: "seller_comments",
      label: "Seller Comments",
      type: "textarea",
    },
    {
      name: "order_status",
      label: "Status",
      type: "select",
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: "Initiated",
          value: "initiated",
        },
        {
          label: "Payment Recieved",
          value: "payment_recieved",
        },
        {
          label: "payment Declined",
          value: "payment_declined",
        },
      ],
    },
    {
      name: "notes",
      label: "Internal Notes",
      type: "textarea",
    },
  ],
};
