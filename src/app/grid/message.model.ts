import { Player } from './player.model';

export class Message {
    public id: string;
    public senderId: string;
    public parentMsgId: string;
    public msg: string;
    public isGif: boolean;
    public timestamp: Date;
  }

  export class ChatMessage {
    public id: string;
    public player: Player
    public parentMsgId: string;
    public msg: string;
    public isGif: boolean;
    public timestamp: Date;
  }

