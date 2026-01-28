import type { LogTransactionParams, LogTransactionResponse, ListTransactionsParams, ListTransactionsResponse, TransactionStatus, UpdateTransactionStatusResponse, VelumClientConfig } from "../types.js";
export declare class TransactionsEndpoint {
    private config;
    constructor(config: Required<Pick<VelumClientConfig, "apiKey" | "baseUrl">> & {
        fetch: typeof globalThis.fetch;
    });
    log(params: LogTransactionParams): Promise<LogTransactionResponse>;
    list(params?: ListTransactionsParams): Promise<ListTransactionsResponse>;
    updateStatus(signature: string, status: TransactionStatus): Promise<UpdateTransactionStatusResponse>;
}
