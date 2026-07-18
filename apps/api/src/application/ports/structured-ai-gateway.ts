export type StructuredAiRequest = Readonly<{
  input: string;
  instructions: string;
  jsonSchema: Readonly<Record<string, unknown>>;
  model: string;
  schemaName: string;
}>;

export interface StructuredAiGateway {
  generate<T>(request: StructuredAiRequest, parse: (value: unknown) => T): Promise<T>;
}
