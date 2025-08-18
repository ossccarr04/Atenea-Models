import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesModule } from './categories/categories.module';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SobreNosotrosComponent,
    AyudaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    SobreNosotrosComponent,
    AyudaComponent,
    CategoriesModule
  ]
})
export class ComponentsModule { }
