import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterFor } from 'src/app/store/actions';
import { MdRootStore } from 'src/app/models/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public activeButtonCharacter = true;
  public activeButtonEpisode;

  constructor(private store:Store<MdRootStore>) { 
  }

  ngOnInit(): void {
  }

  filterForCharacters(){
    this.activeButtonEpisode = false;
    this.activeButtonCharacter = true;
    this.store.dispatch(filterFor({show: 'character'}));
  }

  filterForEpisodes(){
    this.activeButtonCharacter = false;
    this.activeButtonEpisode = true;
    this.store.dispatch(filterFor({show: 'episode'}));
  }

}
