import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChatMessage } from '../message.model';

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
