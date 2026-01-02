import { DistributedChatServer } from '../ChatServer';

const server = new DistributedChatServer(3003, 'server3');
console.log('🚀 Starting Server 3 on port 3003...');
server.start();