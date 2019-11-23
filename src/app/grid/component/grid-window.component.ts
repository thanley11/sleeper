import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Message } from '../message.model';

@Component({
  selector: 'eg-grid-window',
  templateUrl: 'grid-window.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridWindowComponent {
    @Input() players: Player[];
    @Input() messages: Message[];
}
