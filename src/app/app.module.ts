import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { IngredientReceptacleComponent } from './alchemy-station/mixing-table/ingredient-receptacle/ingredient-receptacle.component';
import { IngredientInfoCardComponent } from './alchemy-station/ingredient-info-card/ingredient-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlchemyStationComponent,
    HomeComponent,
    IngredientBinComponent,
    MixingTableComponent,
    DisplayAreaComponent,
    ControlPanelComponent,
    IngredientReceptacleComponent,
    IngredientInfoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
