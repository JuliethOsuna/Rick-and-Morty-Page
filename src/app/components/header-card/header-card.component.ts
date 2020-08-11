import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

  @Input()characterName;
  @Input()characterLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
