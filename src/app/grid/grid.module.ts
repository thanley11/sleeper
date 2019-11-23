import { GridCardComponent } from './component/grid-cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './component/grid.component';
import { PlayersService } from './services/players.service';
import { AppMaterialModule } from '../material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { GridEffects } from './store/grid.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppMaterialModule,
        EffectsModule.forFeature([GridEffects])
    ],
    providers: [
        PlayersService
    ],
    declarations: [
        GridComponent,
        GridCardComponent
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