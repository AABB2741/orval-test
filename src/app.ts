import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifyMultipart from "@fastify/multipart";
import fastifyApiReference from "@scalar/fastify-api-reference";
import fastify from "fastify";
import { createJsonSchemaTransform, createJsonSchemaTransformObject, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { registerDtos } from "./utils/register-dtos";
import { loginRoute } from "./routes/login";
import { getUserRoute } from "./routes/get-user";
import { uploadRoute } from "./routes/upload";
import { getThumbnailRoute } from "./routes/get-thumbnail";

export const app = fastify();

registerDtos();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyMultipart)
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Orval Test API",
      version: "1.0.0"
    }
  },
  transform: createJsonSchemaTransform({
    zodToJsonConfig: { target: "openapi-3.0" }
  }),
  transformObject: createJsonSchemaTransformObject({
    zodToJsonConfig: { target: "openapi-3.0" }
  }),
});

app.register(fastifyApiReference, {
  routePrefix: "/docs",
  configuration: {
    theme: "elysiajs"
  }
})

app.register(fastifyCors, {
  origin: "*"
});

app.register(loginRoute);
app.register(getUserRoute);
app.register(uploadRoute);
app.register(getThumbnailRoute);