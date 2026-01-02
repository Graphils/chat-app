"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatServer_1 = require("../ChatServer");
const server = new ChatServer_1.DistributedChatServer(3002, 'server2');
console.log('🚀 Starting Server 2 on port 3002...');
server.start();
//# sourceMappingURL=server2.js.map