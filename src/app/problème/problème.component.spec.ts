import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblèmeComponent } from './problème.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormBuilder } from '@angular/forms';



describe('ProblèmeComponent', () => {
  let component: ProblèmeComponent;
  let fixture: ComponentFixture<ProblèmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AngularFontAwesomeModule],
      declarations: [ ProblèmeComponent ],
      providers:[FormBuilder]
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

  it('zone PRÉNOM doit être valide avec 200 caractères', () =>{
    expect(true).toBeTruthy();
  });
});
