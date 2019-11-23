import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AppMaterialModule } from './material/material.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { GridModule } from './grid/grid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarContainerComponent } from './toolbar/toolbar.container';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GridEffects } from './grid/store/grid.effects';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContainerComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    GridModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppMaterialModule,
    EffectsModule.forRoot([AppEffects, GridEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
