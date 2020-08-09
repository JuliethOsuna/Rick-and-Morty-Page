import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Output()showCharacterDetail: EventEmitter<any> = new EventEmitter<any>();
  @Input()infoCard;

  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(id){
    this.showCharacterDetail.emit(id);
  }

}
