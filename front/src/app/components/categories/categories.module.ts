import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { ChaquetasComponent } from './chaquetas/chaquetas.component';
import { FaldasComponent } from './faldas/faldas.component';
import { OtrosComponent } from './otros/otros.component';
import { PantalonesComponent } from './pantalones/pantalones.component';
import { TopsComponent } from './tops/tops.component';
import { VestidosComponent } from './vestidos/vestidos.component';
import { ClothingOptionsModule } from './clothing-options/clothing-options.module';
import { FacturaComponent } from './factura/factura.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CamisetasComponent,
    ChaquetasComponent,
    FaldasComponent,
    OtrosComponent,
    PantalonesComponent,
    TopsComponent,
    VestidosComponent,
    FacturaComponent
  ],
  imports: [
    CommonModule,
    ClothingOptionsModule,
    FormsModule
  ],
  exports: [
    CamisetasComponent,
    ChaquetasComponent,
    FaldasComponent,
    OtrosComponent,
    PantalonesComponent,
    TopsComponent,
    VestidosComponent
  ]
})
export class CategoriesModule { }
