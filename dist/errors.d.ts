export declare class VelumApiError extends Error {
    readonly code: string;
    readonly status: number;
    readonly details?: Record<string, unknown>;
    constructor(code: string, message: string, status: number, details?: Record<string, unknown>);
    static fromResponse(response: Response): Promise<VelumApiError>;
}
