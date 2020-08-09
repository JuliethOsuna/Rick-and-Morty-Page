import { Component, OnInit } from '@angular/core';
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

  public showCharacterDetail;
  public characters: MdCharacters;
  public episodes: MdEpisodes;
  public locations: MdLocations;

  constructor(
    private characteresService:CharacteresService,
    private episodesService:EpisodesService,
    private locationsService:LocationsService
  ) { }

  ngOnInit(): void {
    this.characteresService.getAll().subscribe((res:any) => {
      this.characters = res;
    })

    this.episodesService.getAll().subscribe((res:any) => {
      this.episodes = res;
    })

    this.locationsService.getAll().subscribe((res:any) => {
      this.locations = res;
      console.log(this.locations)
    })
  }

  showModal(){
    this.showCharacterDetail = true;
  }

  closeModal(){
    this.showCharacterDetail = false;
  }

}
