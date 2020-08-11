import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output()filterFor: EventEmitter<any> = new EventEmitter<any>();
  @Output()query: EventEmitter<any> = new EventEmitter<any>();

  public activeButtonCharacter;
  public activeButtonEpisode;

  constructor() { }

  ngOnInit(): void {
  }

  filterForCharacters(){
    this.activeButtonEpisode = false;
    this.activeButtonCharacter = true;
    this.filterFor.emit("character");
    this.query.emit("");
  }

  filterForEpisodes(){
    this.activeButtonCharacter = false;
    this.activeButtonEpisode = true;
    this.filterFor.emit("episode");
    this.query.emit("");
  }

}
