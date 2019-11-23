import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  constructor(
    private store: Store<fromRoot.AppState>) { 
  }

  openSidenav() {
    this.store.dispatch(new SidebarActions.OpenSidenavAction());
  }

  closeSidenav() {
    this.store.dispatch(new SidebarActions.CloseSidenavAction());
  }

}
