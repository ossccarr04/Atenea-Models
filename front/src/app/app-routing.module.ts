import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { OtrosComponent } from './otros/otros.component';  // Asegúrate de importar tu componente

import { ProductComponent } from './components/product/product.component';
import { OtrosComponent } from './components/categories/otros/otros.component';
import { CamisetasComponent } from './components/categories/camisetas/camisetas.component';
import { VestidosComponent } from './components/categories/vestidos/vestidos.component';
import { PantalonesComponent } from './components/categories/pantalones/pantalones.component';
import { TopsComponent } from './components/categories/tops/tops.component';
import { FaldasComponent } from './components/categories/faldas/faldas.component';

const routes: Routes = [
  {
    path: '', redirectTo: "inicio", pathMatch: 'full'
  },
  { path: 'otros', component: OtrosComponent },
  { path: 'inicio', component: ProductComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'vestidos', component: VestidosComponent },
  { path: 'pantalones', component: PantalonesComponent }, 
  { path: 'tops', component: TopsComponent},
  { path: 'faldas', component: FaldasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas
  exports: [RouterModule]  // Exporta el módulo para que las rutas estén disponibles en el módulo principal
})
export class AppRoutingModule { }