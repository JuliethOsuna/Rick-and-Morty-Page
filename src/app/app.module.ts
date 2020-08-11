import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { CharacterCardComponent } from 'src/app/components/character-card/character-card.component';
import { CharacterCardContainerComponent } from 'src/app/components/character-card-container/character-card-container.component';
import { ModalDetailComponent } from 'src/app/components/modal-detail/modal-detail.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { CharacterFilterComponent } from 'src/app/components/character-filter/character-filter.component';
import { HeaderCardComponent } from './components/header-card/header-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CharacterCardComponent,
    CharacterCardContainerComponent,
    ModalDetailComponent,
    HeroComponent,
    LayoutComponent,
    CharacterFilterComponent,
    HeaderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
