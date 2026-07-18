import Fastify, { type FastifyInstance } from "fastify";
import {
  hasZodFastifySchemaValidationErrors,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { z } from "zod";

export type ServerOptions = Readonly<{
  logger?: boolean;
}>;

export function createServer(options: ServerOptions = {}): FastifyInstance {
  const app = Fastify({ logger: options.logger ?? false });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.setErrorHandler((error, _request, reply) => {
    if (hasZodFastifySchemaValidationErrors(error)) {
      return reply.status(400).send({
        error: "VALIDATION_ERROR",
        message: "The request does not match the contract.",
      });
    }

    return reply.send(error);
  });

  app.withTypeProvider<ZodTypeProvider>().get(
    "/health",
    {
      schema: {
        response: {
          200: z.object({
            service: z.literal("merge-quest-api"),
            status: z.literal("ok"),
          }),
        },
      },
    },
    () => ({ service: "merge-quest-api" as const, status: "ok" as const }),
  );

  return app;
}
