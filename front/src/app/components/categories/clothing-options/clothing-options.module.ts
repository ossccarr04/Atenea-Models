import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntalladoComponent } from './camisetas/entallado/entallado.component';
import { MangaComponent } from './camisetas/manga/manga.component';
import { CuelloComponent } from './camisetas/cuello/cuello.component';
import { LargoComponent } from './camisetas/largo/largo.component';
import { DecoracionComponent } from './camisetas/decoracion/decoracion.component';
import { CuelloVestidoComponent } from './vestidos/cuello-vestido/cuello-vestido.component';
import { LargoVestidoComponent } from './vestidos/largo-vestido/largo-vestido.component';
import { MangaVestidoComponent } from './vestidos/manga-vestido/manga-vestido.component';
import { TipoComponent } from './vestidos/tipo/tipo.component';
import { TipoPantalonComponent } from './pantalones/tipo-pantalon/tipo-pantalon.component';
import { LargoPantalonComponent } from './pantalones/largo-pantalon/largo-pantalon.component';
import { LargoFaldaComponent} from './faldas/largo-falda/largo-falda.component';
import { EntalladoFaldaComponent } from './faldas/entallado-falda/entallado-falda.component';




@NgModule({
  declarations: [
    EntalladoComponent,
    MangaComponent,
    CuelloComponent,
    LargoComponent,
    DecoracionComponent,
    CuelloVestidoComponent,
    LargoVestidoComponent,
    MangaVestidoComponent,
    TipoComponent,
    TipoPantalonComponent,
    LargoPantalonComponent,
    EntalladoFaldaComponent,
    LargoFaldaComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    EntalladoComponent,
    MangaComponent,
    CuelloComponent,
    LargoComponent,
    DecoracionComponent,
    CuelloVestidoComponent,
    LargoVestidoComponent,
    MangaVestidoComponent,
    TipoComponent,
    TipoPantalonComponent,
    LargoPantalonComponent,
    EntalladoFaldaComponent,
    LargoFaldaComponent
  ]
})
export class ClothingOptionsModule { }
