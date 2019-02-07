import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ColumnasComponent } from './CssGridLayout/columnas/columnas.component';
import { FilasComponent } from './CssGridLayout/filas/filas.component';
import { DisplaysComponent } from './CssGridLayout/displays/displays.component';
import { EspaciadoComponent } from './CssGridLayout/espaciado/espaciado.component';
import { FuncionesComponent } from './CssGridLayout/funciones/funciones.component';
import { AreasComponent } from './CssGridLayout/areas/areas.component';
import { ColumnSizeComponent } from './CssGridLayout/column-size/column-size.component';
import { ROWSIZEComponent } from './CssGridLayout/row-size/row-size.component';
import { NombreLineasComponent } from './CssGridLayout/nombre-lineas/nombre-lineas.component';
import { GridImplicitoComponent } from './CssGridLayout/grid-implicito/grid-implicito.component';
import { AlineandoItemsComponent } from './CssGridLayout/alineando-items/alineando-items.component';
import { InstagramComponent } from './CssGridLayout/instagram/instagram.component';
import { PinterestComponent } from './CssGridLayout/pinterest/pinterest.component';
import { PlatziComponent } from './CssGridLayout/platzi/platzi.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColumnasComponent,
    FilasComponent,
    DisplaysComponent,
    EspaciadoComponent,
    FuncionesComponent,
    AreasComponent,
    ColumnSizeComponent,
    ROWSIZEComponent,
    NombreLineasComponent,
    GridImplicitoComponent,
    AlineandoItemsComponent,
    InstagramComponent,
    PinterestComponent,
    PlatziComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
