"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatServer_1 = require("../ChatServer");
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const server = new ChatServer_1.DistributedChatServer(PORT, 'main-chat-server');
console.log(`🚀 Starting Chat Server on port ${PORT}...`);
server.start();
//# sourceMappingURL=server1.js.map