import z from "zod";

export const postDto = z.object({
  postId: z.string(),
  title: z.string(),
});
