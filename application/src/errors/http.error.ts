export class HttpError {
    public message: string | undefined;
    public status: number | undefined;
    public timeStamp: string;

    constructor(message?: string, status?: number) {
        this.message = message;
        this.status = status;
        this.timeStamp = new Date().toISOString();
    }
}
