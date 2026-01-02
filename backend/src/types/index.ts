export interface User {
  id: string;
  username: string;
  socketId: string;
  serverId: string;
  groups: string[];
  isOnline: boolean;
  lastSeen: Date;
  isTyping?: boolean;
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  creator: string;
  members: string[];
  createdAt: Date;
}

export interface Message {
  id: string;
  type: 'group' | 'private' | 'system';
  sender: string;
  recipient: string;
  content: string;
  attachments?: string[];
  timestamp: Date;
  delivered: boolean;
  read: boolean;
  senderName?: string;
  groupName?: string;
  isPrivate?: boolean;
  isOwnMessage?: boolean;
  replyTo?: string;
  repliedMessage?: {
    id: string;
    sender: string;
    senderName?: string;
    content: string;
    timestamp: Date;
  };
  deletedForMe?: boolean;
  deletedForEveryone?: boolean;
  deletedBy?: string;
  edited?: boolean;
  editedAt?: Date;
  deliveryAttempts?: number;
  lastDeliveryAttempt?: Date;
  pending?: boolean;
}