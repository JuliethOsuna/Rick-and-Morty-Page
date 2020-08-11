import { Component, Input, Output, ContentChild, TemplateRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent {

  @Input()showModal = false;
  @Output()closeModal: EventEmitter<any> = new EventEmitter<any>();
  @ContentChild('body',{static: false}) bodyTemplateRef: TemplateRef<any>;

  public localShowModal;

  constructor() { }

  ngOnChanges(){
    this.localShowModal = this.showModal;
    this.hideScrollBar();
  }

  close(){
    this.closeModal.emit();
  }

  hideScrollBar(){
    let body = document.querySelector("body");

    if(this.localShowModal){
      body.style.overflow = 'hidden';
    }else {
      body.style.overflow = 'visible';
    }   
  } 

}
