import z from "zod";

export const userDto = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});
