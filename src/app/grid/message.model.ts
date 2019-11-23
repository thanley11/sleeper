import { Player } from './player.model';

export class Message {
    public id: string;
    public senderId: string;
    public parentMsgId: string;
    public text: string;
    public isGif: boolean;
  }

  export class ChatMessage {
    public id: string;
    public player: Player
    public parentMsgId: string;
    public text: string;
    public isGif: boolean;
  }

