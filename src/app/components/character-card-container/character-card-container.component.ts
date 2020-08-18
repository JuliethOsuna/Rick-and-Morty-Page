import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CharacteresService } from 'src/app/services/characteres/characteres.service';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { MdCharacters } from 'src/app/models/characters';
import { MdEpisodes } from 'src/app/models/episodes';
import { MdRootStore } from 'src/app/models/store';
import { paginator } from 'src/app/store/actions';

@Component({
  selector: 'app-character-card-container',
  templateUrl: './character-card-container.component.html',
  styleUrls: ['./character-card-container.component.scss']
})
export class CharacterCardContainerComponent {

  @Input()
    width:number;

  public filterFor;
  public queryString;
  public showCharacterDetail;
  public items;
  public infoCard;
  public infoAttributes;
  private characters:MdCharacters;
  private episodes:MdEpisodes;
  private formatDate = new Intl.DateTimeFormat('es');
  private oldFilterFor;

  constructor(
    private store:Store<MdRootStore>,
    private characteresService:CharacteresService,
    private episodesService:EpisodesService,
    private locationsService:LocationsService
  ) {
    this.store
      .pipe(select(({application:{show}}) => show)).subscribe((show) => {
        this.filterFor = show;
        this.getData();
      });

    this.store
      .pipe(select(({application:{filter}}) => filter)).subscribe((filter) => {
        this.queryString = filter;
        this.getData();
      });
   }

  getData() {
    let queryString = this.queryString;
    if(this.oldFilterFor !== this.filterFor){
      this.oldFilterFor = this.filterFor;
      queryString = "";
    }
    if(this.filterFor === "character"){

      this.characteresService.filter(queryString).subscribe((resCharacters:MdCharacters) => {
        this.characters = resCharacters;
        this.store.dispatch(paginator({prevPage: this.characters.info.prev, nextPage: this.characters.info.next}));

        this.items = resCharacters.results.map(item => {
            return {
              id: item.id,
              image: item.image,
              name: item.name,
              headline: item.location.name,
              attributes: [{
                name: "Especie",
                value: item.species
              }],
              showDetail: true
            }
          })
      })
    }else {
      this.episodesService.filter(queryString).subscribe((resEpisodes:MdEpisodes) => {
        this.episodes = resEpisodes;
        this.store.dispatch(paginator({prevPage: this.episodes.info.prev, nextPage: this.episodes.info.next}));
        
        this.items = resEpisodes.results.map(item => {
          return {
            id: item.id,
            name: item.name,
            headline: item.air_date,
            attributes: [{
              name: "Episodio",
              value: item.episode
            }],
            showDetail: true
          }
        })
      })
    }
  }

  showModal(id){
    this.showCharacterDetail = true;

    if(this.filterFor === "character"){
      let characterSelected =this.characters.results.find(element => element.id === id);

      this.infoCard = {
        id: characterSelected.id,
        image: characterSelected.image,
        name: characterSelected.name,
        headline: characterSelected.location.name,
        attributes: [
          {
            name: "Especie",
            value: characterSelected.species
          },
          {
            name: "Estado",
            value: characterSelected.status
          }
        ],
        showDetail: false
      };

      this.infoAttributes = [
        {
          name: "Genero",
          value: characterSelected.gender
        },
        {
          name: "Creado",
          value: this.formatDate.format(new Date(characterSelected.created))
        },
        {
          name: "Origen",
          value: characterSelected.origin.name
        }
      ]
    }else {
      let episodeSelected = this.episodes.results.find(element => element.id === id);

      this.infoCard = {
        id: episodeSelected.id,
        name: episodeSelected.name,
        headline: episodeSelected.air_date,
        attributes: [{
          name: "Episodio",
          value: episodeSelected.episode
        }],
        showDetail: false
      }

      this.infoAttributes = [
        {
          name: "Creado",
          value: this.formatDate.format(new Date(episodeSelected.created))
        }
      ]
    }
  }

  closeModal(){
    this.showCharacterDetail = false;
  }

  

}
