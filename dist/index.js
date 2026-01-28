import { PaylinksEndpoint } from "./endpoints/paylinks.js";
import { TransactionsEndpoint } from "./endpoints/transactions.js";
export { VelumApiError } from "./errors.js";
const DEFAULT_BASE_URL = "https://velum.cash/api";
export class VelumClient {
    paylinks;
    transactions;
    constructor(config) {
        const resolvedConfig = {
            apiKey: config.apiKey,
            baseUrl: (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, ""),
            fetch: config.fetch ?? globalThis.fetch.bind(globalThis),
        };
        this.paylinks = new PaylinksEndpoint(resolvedConfig);
        this.transactions = new TransactionsEndpoint(resolvedConfig);
    }
}
