import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { SidebarComponent } from './component/sidebar.component';
import { AppMaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {
    public static forRoot() {
        return {
            ngModule: SidebarModule,
            providers: [
            ]
        };
    }
}