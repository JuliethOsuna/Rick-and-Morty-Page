import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterCardContainerComponent } from './character-card-container/character-card-container.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { HeroComponent } from './hero/hero.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CharacterCardComponent,
    CharacterCardContainerComponent,
    ModalDetailComponent,
    HeroComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
