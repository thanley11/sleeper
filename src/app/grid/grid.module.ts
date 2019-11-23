import { GridWindowComponent } from './component/grid-window.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GridComponent } from './component/grid.component';
import { PlayersService } from './services/players.service';
import { AppMaterialModule } from '../material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { GridEffects } from './store/grid.effects';
import { HttpClientModule } from '@angular/common/http';
import { GridInputComponent } from './component/grid-input.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppMaterialModule,
        EffectsModule.forFeature([GridEffects])
    ],
    providers: [
        PlayersService
    ],
    declarations: [
        GridComponent,
        GridWindowComponent,
        GridInputComponent
    ],
    exports: [
    ]
})
export class GridModule {
    public static forRoot() {
        return {
            ngModule: GridModule,
            providers: [
                PlayersService
            ]
        };
    }
}