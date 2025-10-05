import { z } from "zod";

export const orderSchema = z.object({
  type: z.enum(["limit", "market"], {
    error: "Type must be either 'limit' or 'market'",
  }),
  kind: z.enum(["buy", "sell"], {
    error: "Kind must be either 'buy' or 'sell'",
  }),
  price: z.number({ error: "Price must be a number" }).positive(),
  quantity: z.number({ error: "Quantity must be a number" }).positive(),
  market: z.string({ error: "Market must be string" }),
});
export type Order = z.infer<typeof orderSchema>;
