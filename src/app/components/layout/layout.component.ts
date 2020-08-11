import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public filterPage:string = "character";
  public queryString:string;
  public width;

  constructor() { }

  ngOnInit(): void {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
	onResize() {
    this.width = window.innerWidth;
	}

  filterFor(item){
    this.filterPage = item;
  }

  sendQueryString(query){
    this.queryString = query;
  }

}
