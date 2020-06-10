import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AlchemyStationComponent } from './alchemy-station/alchemy-station.component';
import { HomeComponent } from './home/home.component';
import { IngredientBinComponent } from './alchemy-station/ingredient-bin/ingredient-bin.component';
import { MixingTableComponent } from './alchemy-station/mixing-table/mixing-table.component';
import { DisplayAreaComponent } from './alchemy-station/display-area/display-area.component';
import { ControlPanelComponent } from './alchemy-station/control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlchemyStationComponent,
    HomeComponent,
    IngredientBinComponent,
    MixingTableComponent,
    DisplayAreaComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
