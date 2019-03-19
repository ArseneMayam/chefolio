import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDescriptionComponent } from './profil-description.component';

describe('ProfilDescriptionComponent', () => {
  let component: ProfilDescriptionComponent;
  let fixture: ComponentFixture<ProfilDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
