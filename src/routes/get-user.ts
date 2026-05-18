import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { userDto } from "../dtos/user";
import { errorDto } from "../dtos/error";

export const getUserRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/auth/me", {
    schema: {
      operationId: "get-user",
      summary: "Get the current user",
      tags: ["Auth"],
      response: {
        200: userDto,
        401: errorDto.meta({ description: "User not signed in" }),
        500: errorDto.meta({ description: "Internal server error" }),
      }
    }
  }, async (request, reply) => {
    return reply.status(200).send({
      id: "123",
      name: "John Doe",
      email: "johndoe@acme.inc",
    });
  })
}