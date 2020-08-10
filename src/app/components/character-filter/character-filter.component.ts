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
        label: "Nombre",
        control: "name"
      },
      {
        type: "text",
        label: "Episodio",
        control: "episode"
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
  }

  closeModalFilter(){
    this.showFilter = false;
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

}
