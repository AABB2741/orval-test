import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { errorDto } from "../dtos/error";
import z from "zod";
import { Readable } from "node:stream";

export const getThumbnailRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/posts/:postId/thumbnail", {
    attachValidation: true,
    schema: {
      operationId: "get-thumbnail",
      summary: "Get a post's thumbnail",
      tags: ["Post"],
      produces: ["image/jpeg"],
      params: z.object({
        postId: z.string().describe("The ID of the post")
      }),
      response: {
        200: z.custom(),
        500: errorDto.meta({ description: "Internal server error" }),
      }
    }
  }, async (request, reply) => {
    return reply.status(200).send(Readable.from("fake image data"));
  })
}