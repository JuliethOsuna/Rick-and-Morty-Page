import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

@Input()width;
@Output()filter: EventEmitter<any> = new EventEmitter<any>();


   
  constructor() { }

  ngOnInit(): void {
  }

  filterFor(item){
    this.filter.emit(item);
  }

}
