import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filterPage } from 'src/app/store/actions';
import { MdRootStore } from 'src/app/models/store';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  public prevPage;
  public nextPage;

  constructor(private store:Store<MdRootStore>) { 
    this.store
    .pipe(select(({application:{nextPage, prevPage}}) => ({nextPage, prevPage}))).subscribe(({nextPage, prevPage}) => {
      this.prevPage = prevPage;
      this.nextPage = nextPage;
    });
  }

  ngOnInit(): void {
    
  }

  onNextPage(){
    if(this.nextPage){
      const next = this.nextPage.split('?');
      this.store.dispatch(filterPage({filter: next[1]}));
    }
     
  }

  onPrevPage(){
    if(this.prevPage){
      const prev = this.prevPage.split('?');
      this.store.dispatch(filterPage({filter: prev[1]}));
    }
  }

}
