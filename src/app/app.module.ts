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
import { PaginatorComponent } from './components/paginator/paginator.component';

import { StoreModule } from '@ngrx/store';
import { contentReducer } from 'src/app/store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment'; // Angular CLI environment

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
    HeaderCardComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ application: contentReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
