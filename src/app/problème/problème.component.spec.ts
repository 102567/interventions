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
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(2))
    expect(zone.valid).toBeFalsy();
  });

  it('zone PRÉNOM doit être valide avec 3 caractères', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(3))
    expect(zone.valid).toBeTruthy();
  });

  it('zone PRÉNOM doit être valide avec 200 caractères', () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(200))
    expect(zone.valid).toBeTruthy();
  });
});
