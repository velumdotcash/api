export class VelumApiError extends Error {
    code;
    status;
    details;
    constructor(code, message, status, details) {
        super(message);
        this.name = "VelumApiError";
        this.code = code;
        this.status = status;
        this.details = details;
    }
    static async fromResponse(response) {
        try {
            const body = await response.json();
            return new VelumApiError(body.error.code, body.error.message, response.status, body.error.details);
        }
        catch {
            return new VelumApiError("UNKNOWN_ERROR", `HTTP ${response.status}: ${response.statusText}`, response.status);
        }
    }
}
