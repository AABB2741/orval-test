import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { userDto } from "../dtos/user";
import { errorDto } from "../dtos/error";

export const loginRoute: FastifyPluginAsyncZod = async (app) => {
  app.post("/auth/login", {
    schema: {
      operationId: "login",
      summary: "Login",
      tags: ["Auth"],
      body: z.object({
        email: z.email(),
        password: z.string(),
      }),
      response: {
        200: userDto,
        401: errorDto.meta({ description: "Invalid credentials" }),
        500: errorDto.meta({ description: "Internal server error" }),
      }
    }
  }, async (request, reply) => {
    return reply.status(200).send({
      id: "123",
      email: request.body.email,
      name: "John Doe"
    });
  })
}