import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {

  @Input()
  filterFor:string = "character";
  @Output()
  query: EventEmitter<any> = new EventEmitter<any>();

  public filterForm:FormGroup;
  public showFilter = false;
  public filters = {
    character: [
      {
        type: "text",
        label: "Nombre",
        control: "name"
      },
      {
        type: "select",
        label: "Estado",
        control: "status",
        options: [
          {
            value: "alive",
            description: "Vivo"
          },
          {
            value: "dead",
            description: "Muerto"
          },          
          {
            value: "unknown",
            description: "Desconocido"
          },
        ]
      },      
      {
        type: "select",
        label: "Especie",
        control: "species",
        options: [
          {
            value: "Human",
            description: "Humano"
          },
          {
            value: "Alien",
            description: "Alien"
          },
          {
            value: "humanoid",
            description: "Humanoide"
          }
        ]
      },      
      {
        type: "select",
        label: "Genero",
        control: "gender",
        options: [
          {
            value: "female",
            description: "Femenino"
          },
          {
            value: "male",
            description: "Masculino"
          },
          {
            value: "genderless",
            description: "Sin genero"
          },
          {
            value: "unknown",
            description: "Desconocido"
          }
        ]
      },      
    ],
    episode: [
      {
        type: "text",
        label: "Nombre del episodio",
        control: "name"
      },
      {
        type: "select",
        label: "Temporada",
        control: "episode",
        options: [
          {
            value: "S01",
            description: "Temporada 1"
          },
          {
            value: "S02",
            description: "Temporada 2"
          },
          {
            value: "S03",
            description: "Temporada 3"
          },
          {
            value: "S04",
            description: "Temporada 4"
          }
        ]
      },
    ]
  }

  constructor(private builder:FormBuilder) { }

  ngOnChanges() {
    this.createForm();
    this.createDinamicControls();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.filterForm = this.builder.group({})
  }

  createDinamicControls(){
    this.filters[this.filterFor].forEach(element => {
      this.filterForm.addControl(`${element.control}`, this.builder.control(''));
    });
  }

  openModalFilter(){
    this.showFilter = true;
    this.hideScrollBar();
  }

  closeModalFilter(){
    this.showFilter = false;
    this.hideScrollBar();
  }

  filter(){
    const queryString = Object.keys(this.filterForm.value).reduce((accumulator, key) => {
      if(this.filterForm.value[key]){
        accumulator += `${key}=${this.filterForm.value[key]}&`
      }

      return accumulator
    }, "");

    this.query.emit(queryString);
    this.showFilter = false;
    this.filterForm.reset();
  }

  hideScrollBar(){
    let body = document.querySelector("body");

    if(this.showFilter){
      body.style.overflow = 'hidden';
    }else {
      body.style.overflow = 'visible';
    }   
  } 

}
