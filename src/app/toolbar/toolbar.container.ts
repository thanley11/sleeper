import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as SidebarActions from '../sidebar/store/sidebar.actions';

@Component({
  selector: 'eg-toolbar-container',
  template: `<eg-toolbar
                (openSidenav)="openSidenav()" 
  ></eg-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ToolbarContainerComponent {
  // public loggedIn$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.AppState>) { 
      // this.loggedIn$ = store.pipe(select(fromRoot.isLoggedIn));
  }

  openSidenav() {
    this.store.dispatch(new SidebarActions.OpenSidenavAction());
  }

  closeSidenav() {
    this.store.dispatch(new SidebarActions.CloseSidenavAction());
  }

}
