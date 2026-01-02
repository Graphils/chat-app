import { DistributedChatServer } from '../ChatServer';

const server = new DistributedChatServer(3002, 'server2');
console.log('🚀 Starting Server 2 on port 3002...');
server.start();