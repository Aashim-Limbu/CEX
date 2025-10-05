import type { RequestHandler } from "express";
import { orderSchema } from "../schemas/order.schema";
import { parseBuildCommand } from "typescript";
import prisma from "../lib/prisma";

const createOrder: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = orderSchema.parse(req.body);

    // Create order in database
    const order = await prisma.order.create({
      data: validatedData,
    });

    res.status(201).json(order);
  } catch (error) {

    }
    res.status(500).json({ error: "Failed to create order" });
  }
};
