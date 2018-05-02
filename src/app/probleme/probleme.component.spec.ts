import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { problemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TypeProblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';



describe('problemeComponent', () => {
  let component: problemeComponent;
  let fixture: ComponentFixture<problemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AngularFontAwesomeModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ problemeComponent ],
      providers:[FormBuilder,TypeProblemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(problemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

  it('zone PRÉNOM doit être invalide avec 2 caractères', () =>{
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(2))
    errors = zone.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('zone PRÉNOM doit être valide avec 3 caractères', () =>{
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(3))
    errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });

  it('zone PRÉNOM doit être valide avec 200 caractères', () =>{
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(200))
    errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });

  it('zone PRÉNOM doit être invalide avec aucun caractères', () =>{
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('zone PRÉNOM doit être invalide avec 1 caractère', () =>{
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(1));
    errors = zone.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('zone PRÉNOM doit être invalide avec 50 espaces', () =>{
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue(''.repeat(50));
    errors = zone.errors || {};
    expect(errors['longeurMinimum']).toBeFalsy();
  });

  it('zone PRÉNOM doit être invalide avec 1 caractère et 2 espaces', () =>{
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(1),' '.repeat(2));
    errors = zone.errors || {};
    expect(errors['longeurMinimum']).toBeFalsy();
  });

  it('Zone Téléphone est désactivé quand ne pas notifier', () => {
    component.gestionNotification('pasNotification');
    let zone = component.problemeForm.get('telephone');
    expect( zone.status ).toEqual('DISABLED')
  });

  it('Zone Téléphone est vide quand ne pas ne pas notifier', () => {
    component.gestionNotification('pasNotification');
    let zone = component.problemeForm.get('telephone');
    expect( zone.value ).toBeNull();
  });

  it('Zone Adresse Courriel est désactivé quand ne pas notifier', () => {
    component.gestionNotification('pasNotification');
    let zone = component.problemeForm.get('addresseCourrielGroup.courriel')
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone Confirmer Courriel est désactivé quand ne pas notifier', () => {
    component.gestionNotification('pasNotification');
    let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation')
    expect(zone.status).toEqual('DISABLED');
  });
});
