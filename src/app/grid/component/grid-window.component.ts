import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChatMessage } from '../message.model';
import * as _ from 'lodash';

@Component({
  selector: 'eg-grid-window',
  templateUrl: 'grid-window.html',
  styleUrls: ['grid-window.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridWindowComponent {
    @Input() messages: ChatMessage[];
    constructor(private sanitizer:DomSanitizer){}

    sanitizeAvatar(msg: ChatMessage)
    {
      let avatar = _.get(msg.player, 'avatar');
      if(avatar){
        return this.sanitizer.bypassSecurityTrustUrl(avatar);
      }
      return '';
    }

    sanitizeGif(message: ChatMessage)
    {
      let msg = _.get(message, 'msg');
      if(msg){
        return this.sanitizer.bypassSecurityTrustUrl(msg);
      }
      return ''; 
    }
}
