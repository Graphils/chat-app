export declare class DistributedChatServer {
    private readonly app;
    private readonly server;
    private readonly io;
    private readonly port;
    private readonly serverId;
    private users;
    private groups;
    private messages;
    private userSocketMap;
    private typingStatus;
    constructor(port?: number, serverId?: string);
    private initializeSampleData;
    private setupRoutes;
    private setupSocketHandlers;
    private handleUserDisconnect;
    start(): void;
}
