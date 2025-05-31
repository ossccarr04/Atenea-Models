import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { OtrosComponent } from './otros/otros.component';  // Asegúrate de importar tu componente

import { ProductComponent } from './components/product/product.component';
import { OtrosComponent } from './components/categories/otros/otros.component';
import { CamisetasComponent } from './components/categories/camisetas/camisetas.component';
import { VestidosComponent } from './components/categories/vestidos/vestidos.component';
import { PantalonesComponent } from './components/categories/pantalones/pantalones.component';
import { FaldasComponent } from './components/categories/faldas/faldas.component';
import { ChaquetasComponent } from './components/categories/chaquetas/chaquetas.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';

const routes: Routes = [
  {
    path: '', redirectTo: "inicio", pathMatch: 'full'
  },
  { path: 'otros', component: OtrosComponent },
  { path: 'inicio', component: ProductComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent},
  { path: 'ayuda', component:  AyudaComponent},
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'vestidos', component: VestidosComponent },
  { path: 'pantalones', component: PantalonesComponent },
  { path: 'faldas', component: FaldasComponent },
  { path: 'chaquetas', component: ChaquetasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas
  exports: [RouterModule]  // Exporta el módulo para que las rutas estén disponibles en el módulo principal
})
export class AppRoutingModule { }