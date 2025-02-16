import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroPageComponent} from './pages/hero-page/hero-page.component';
import {LayoutPageComponent} from './pages/layout-page/layout-page.component';
import {ListPageComponent} from './pages/list-page/list-page.component';
import {NewPageComponent} from './pages/new-page/new-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {MaterialModule} from "../material/material.module";
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    HeroCardComponent
  ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        MaterialModule,
        NgOptimizedImage,
        MatProgressSpinner,
        ReactiveFormsModule
    ]
})
export class HeroesModule {
}
