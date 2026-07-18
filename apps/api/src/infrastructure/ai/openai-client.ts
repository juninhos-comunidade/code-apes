import OpenAI from "openai";

import type {
  StructuredAiGateway,
  StructuredAiRequest,
} from "../../application/ports/structured-ai-gateway.js";

const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_MAX_RETRIES = 2;

export function createOpenAiClient(apiKey: string) {
  return new OpenAI({
    apiKey,
    maxRetries: DEFAULT_MAX_RETRIES,
    timeout: DEFAULT_TIMEOUT_MS,
  });
}

export class OpenAiResponsesGateway implements StructuredAiGateway {
  public constructor(private readonly client: OpenAI) {}

  public async generate<T>(
    request: StructuredAiRequest,
    parse: (value: unknown) => T,
  ): Promise<T> {
    const response = await this.client.responses.create({
      input: request.input,
      instructions: request.instructions,
      model: request.model,
      text: {
        format: {
          name: request.schemaName,
          schema: request.jsonSchema,
          strict: true,
          type: "json_schema",
        },
      },
    });

    if (!response.output_text) {
      throw new Error("OpenAI returned no structured output.");
    }

    return parse(JSON.parse(response.output_text) as unknown);
  }
}
