import type { VelumClientConfig } from "./types.js";
import { PaylinksEndpoint } from "./endpoints/paylinks.js";
import { TransactionsEndpoint } from "./endpoints/transactions.js";
export { VelumApiError } from "./errors.js";
export type { VelumClientConfig, CreatePaylinkParams, CreatePaylinkResponse, Paylink, LogTransactionParams, LogTransactionResponse, ListTransactionsParams, ListTransactionsResponse, Transaction, TransactionType, TransactionStatus, UpdateTransactionStatusResponse, ApiErrorBody, } from "./types.js";
export declare class VelumClient {
    readonly paylinks: PaylinksEndpoint;
    readonly transactions: TransactionsEndpoint;
    constructor(config: VelumClientConfig);
}
