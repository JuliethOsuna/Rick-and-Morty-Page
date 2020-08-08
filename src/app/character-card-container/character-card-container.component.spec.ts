import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardContainerComponent } from './character-card-container.component';

describe('CharacterCardContainerComponent', () => {
  let component: CharacterCardContainerComponent;
  let fixture: ComponentFixture<CharacterCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
