import { Component, OnInit } from '@angular/core';
import { GetCharacteresService } from '../services/get-characteres/get-characteres.service'

@Component({
  selector: 'app-character-card-container',
  templateUrl: './character-card-container.component.html',
  styleUrls: ['./character-card-container.component.scss']
})
export class CharacterCardContainerComponent implements OnInit {

  public showCharacterDetail;

  constructor(private getCharacteresService:GetCharacteresService) { }

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
