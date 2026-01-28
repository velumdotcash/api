import { VelumApiError } from "../errors.js";
export class PaylinksEndpoint {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(params) {
        const response = await this.config.fetch(`${this.config.baseUrl}/v1/paylinks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.config.apiKey,
            },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            throw await VelumApiError.fromResponse(response);
        }
        return response.json();
    }
    async get(id) {
        const response = await this.config.fetch(`${this.config.baseUrl}/v1/paylinks/${encodeURIComponent(id)}`, {
            method: "GET",
            headers: {
                "x-api-key": this.config.apiKey,
            },
        });
        if (!response.ok) {
            throw await VelumApiError.fromResponse(response);
        }
        return response.json();
    }
}
