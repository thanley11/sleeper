import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Message, ChatMessage } from '../message.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'eg-grid-window',
  templateUrl: 'grid-window.html',
  styleUrls: ['grid-window.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridWindowComponent {
    @Input() messages: ChatMessage[];
    constructor(private sanitizer:DomSanitizer){}

    sanitize(url)
    {
    return this.sanitizer.bypassSecurityTrustUrl(url)
    }
}
