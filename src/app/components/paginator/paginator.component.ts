import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
    prevPage;
  @Input()
    nextPage;
  @Output()
    queryString: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(): void {
/*     this.onNextPage();
    this.onPrevPage(); */
    console.log(this.prevPage, this.nextPage)
    
  }

  ngOnInit(): void {
  }

  onNextPage(){
    console.log("aqui")
    if(this.nextPage){
      const next = this.nextPage.split('?');
      this.queryString.emit(next[1]);
    }
     
  }

  onPrevPage(){
    if(this.prevPage){
      const prev = this.prevPage.split('?');
      this.queryString.emit(prev[1]);
    }
  }

}