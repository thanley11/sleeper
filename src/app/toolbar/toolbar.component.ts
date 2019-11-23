import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';


@Component({
  selector: 'eg-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  @Output() openSidenav = new EventEmitter();
  @Output() logout = new EventEmitter();
  @Input() loggedIn$: Observable<boolean>;

}
