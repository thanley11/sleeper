import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as sidebarActions from '../store/sidebar.actions';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() openStatus: boolean;
  constructor(private store: Store<fromRoot.AppState>) {
  }
  openSidenav() {
    this.store.dispatch(new sidebarActions.OpenSidenavAction());
  }

  closeSidenav() {
    this.store.dispatch(new sidebarActions.CloseSidenavAction());
  }

}

