import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'eg-grid-cards',
  template: `<div *ngFor="let player of players">{{player.last_name}}, {{player.first_name}}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridCardComponent {
    @Input() players: Player[];
}
