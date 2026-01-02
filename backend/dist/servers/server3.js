"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatServer_1 = require("../ChatServer");
const server = new ChatServer_1.DistributedChatServer(3003, 'server3');
console.log('🚀 Starting Server 3 on port 3003...');
server.start();
//# sourceMappingURL=server3.js.map