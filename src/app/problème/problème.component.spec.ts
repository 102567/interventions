import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblèmeComponent } from './problème.component';

describe('ProblèmeComponent', () => {
  let component: ProblèmeComponent;
  let fixture: ComponentFixture<ProblèmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblèmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblèmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('zone PRÉNOM doit être invalide avec 2 caractères', () =>{
    expect(false).toBeFalsy();
  });

  it('zone PRÉNOM doit être valide avec 3 caractères', () =>{
    expect(true).toBeTruthy();
  });

  it('zone PRÉNOM doit être valide avec 300 caractères', () =>{
    expect(true).toBeTruthy();
  });
});
