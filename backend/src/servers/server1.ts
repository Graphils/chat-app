import { DistributedChatServer } from '../ChatServer';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const server = new DistributedChatServer(PORT, 'main-chat-server');

console.log(`🚀 Starting Chat Server on port ${PORT}...`);
server.start();