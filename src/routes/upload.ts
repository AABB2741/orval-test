import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { errorDto } from "../dtos/error";
import z from "zod";
import { postDto } from "../dtos/post";

export const uploadRoute: FastifyPluginAsyncZod = async (app) => {
  app.post("/posts", {
    attachValidation: true,
    schema: {
      operationId: "upload",
      summary: "Upload a file",
      tags: ["Post"],
      consumes: ["multipart/form-data"],
      body: z.object({
        title: z.string(),
        file: z.file(),
      }),
      response: {
        201: postDto,
        401: errorDto.meta({ description: "User not signed in" }),
        500: errorDto.meta({ description: "Internal server error" }),
      }
    }
  }, async (request, reply) => {
    return reply.status(201).send({
      title: "Some title",
      postId: "123"
    });
  })
}