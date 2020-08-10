import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public filterPage:string = "character";
  public queryString:string;

  constructor() { }

  ngOnInit(): void {
  }

  filterFor(item){
    this.filterPage = item;
  }

  sendQueryString(query){
    this.queryString = query;
  }

}
