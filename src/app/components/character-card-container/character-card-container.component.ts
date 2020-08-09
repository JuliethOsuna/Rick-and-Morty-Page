import { Component, OnInit, Input } from '@angular/core';
import { CharacteresService } from 'src/app/services/characteres/characteres.service';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { MdCharacters } from 'src/app/models/characters';
import { MdEpisodes } from 'src/app/models/episodes';
import { MdLocations } from 'src/app/models/locations';

@Component({
  selector: 'app-character-card-container',
  templateUrl: './character-card-container.component.html',
  styleUrls: ['./character-card-container.component.scss']
})
export class CharacterCardContainerComponent implements OnInit {

  @Input()
  filterFor:string = "character";

  public showCharacterDetail;
  public items;
  public infoCard;
  public infoAttributes;
  private characters:MdCharacters;
  private episodes:MdEpisodes;
  private formatDate = new Intl.DateTimeFormat('es');

  constructor(
    private characteresService:CharacteresService,
    private episodesService:EpisodesService,
    private locationsService:LocationsService
  ) { }

  ngOnChanges() {
    console.log(this.filterFor)
    if(this.filterFor === "character"){
      this.characteresService.getAll().subscribe((resCharacters:MdCharacters) => {
        this.characters = resCharacters;
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
      this.episodesService.getAll().subscribe((resEpisodes:MdEpisodes) => {
        this.episodes = resEpisodes;
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

  ngOnInit(): void {
    this.locationsService.getAll().subscribe((resLocations:MdLocations) => {})
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
