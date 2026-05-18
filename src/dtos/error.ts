import z from "zod";

export const errorDto = z.object({
  message: z.string(),
  statusCode: z.number(),
});
