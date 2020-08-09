import { Component, OnInit } from '@angular/core';
import { CharacteresService } from 'src/app/services/characteres/characteres.service'

@Component({
  selector: 'app-character-card-container',
  templateUrl: './character-card-container.component.html',
  styleUrls: ['./character-card-container.component.scss']
})
export class CharacterCardContainerComponent implements OnInit {

  public showCharacterDetail;

  constructor(private getCharacteresService:CharacteresService) { }

  ngOnInit(): void {
    this.getCharacteresService.getAll().subscribe((res:any) => {
      console.log(res)
    })
  }

  showModal(){
    this.showCharacterDetail = true;
  }

  closeModal(){
    this.showCharacterDetail = false;
  }

}
