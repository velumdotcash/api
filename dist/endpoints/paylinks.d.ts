import type { CreatePaylinkParams, CreatePaylinkResponse, Paylink, VelumClientConfig } from "../types.js";
export declare class PaylinksEndpoint {
    private config;
    constructor(config: Required<Pick<VelumClientConfig, "apiKey" | "baseUrl">> & {
        fetch: typeof globalThis.fetch;
    });
    create(params: CreatePaylinkParams): Promise<CreatePaylinkResponse>;
    get(id: string): Promise<Paylink>;
}
