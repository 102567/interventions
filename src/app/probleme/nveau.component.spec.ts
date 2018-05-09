import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TypeProblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';
import { NveauComponent } from './nveau.component';

describe('NveauComponent', () => {
  let component: NveauComponent;
  let fixture: ComponentFixture<NveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AngularFontAwesomeModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ NveauComponent ],
      providers:[FormBuilder,TypeProblemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NveauComponent);
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

  it('Zone Adresse Courriel est désactivée quand ne pas me notifier', () => {
    component.gestionNotification('pasNotification');
    let zone = component.problemeForm.get('adresseCourrielGroup.courriel');
    expect(zone.status).toEqual('DISABLED'); 
});

it('Zone Confirmer  Courriel est désactivée quand ne pas me notifier', () => {
  component.gestionNotification('pasNotification');
  let zone = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
  expect(zone.status).toEqual('DISABLED'); 
});

it('Zone Télephone est désactivé quand ne pas me notifier', () => {
component.gestionNotification('pasNotification');
let zone = component.problemeForm.get('telephone');
expect(zone.status).toEqual('DISABLED'); 
});

it('Zone  Télephone est vide quand ne pas me notifier', () => {
component.gestionNotification('pasNotification');
let zone = component.problemeForm.get('telephone');
expect(zone.value).toBeNull(); 
});

it('Zone Téléphone est désactivé quand notifier par courriel', () => {
component.gestionNotification('parCourriel');
let zone = component.problemeForm.get('telephone');
expect(zone.status).toEqual('DISABLED'); 
});

it('Zone Adresse Courriel est activé quand notifier par courriel', () => {
component.gestionNotification('parCourriel');
let zone = component.problemeForm.get('adresseCourrielGroup.courriel');
expect(zone.status).not.toEqual('DISABLED');
});

it('Zone  Confirmer Courriel est activé quand notifier par courriel', () => {
component.gestionNotification('parCourriel');
let zone = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
expect(zone.status).not.toEqual('DISABLED');
});

it('Zone Adresse Courriel est invalide sans valeur quand notifier par courriel', () => {
component.gestionNotification('parCourriel');
let zone = component.problemeForm.get('adresseCourrielGroup.courriel');
expect(zone.value).toBeNull();
});

it('Zone  Confirmer Courriel est invalide sans valeur quand notifier par courriel', () => {
component.gestionNotification('parCourriel');
let zone = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
expect(zone.value).toBeNull();
});

it('Zone  Adresse Courriel est invalide avec un format non conforme', () => {
component.gestionNotification('parCourriel');
let errors = { };
let zone = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
errors = zone.errors || { };
expect(errors['pattern']).toBeFalsy();
});

it('Zone  Adresse Courriel sans valeur  et Zone  Confirmation Courriel avec valeur valide retourne null', () => {
component.gestionNotification('parCourriel');
let errors = { };
let zoneAdresseCourriel = component.problemeForm.get('adresseCourrielGroup.courriel');
let zoneCourrielConfirmation = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
zoneAdresseCourriel.setValue('');
zoneCourrielConfirmation.setValue('philippe567@hotmail.com');
let groupe = component.problemeForm.get('adresseCourrielGroup');
errors = groupe.errors|| { };
expect(errors['match']).toBeUndefined();
});

it('Zone  Adresse Courriel avec  valeur valide et Zone  Confirmation Courriel sans valeur retourne null', () => {
component.gestionNotification('parCourriel');
let errors = { };
let zoneAdresseCourriel = component.problemeForm.get('adresseCourrielGroup.courriel');
let zoneCourrielConfirmation = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
zoneAdresseCourriel.setValue('philippe22@hotmail.com');
zoneCourrielConfirmation.setValue('');
let groupe = component.problemeForm.get('adresseCourrielGroup');
errors = groupe.errors|| { };
expect(errors['match']).toBeUndefined();
});

it('Zone  Adresse Courriel  et Zone  Confirmation Courriel sont invalides si les valeur sont identiques quand notifier par courriel ', () => {
component.gestionNotification('parCourriel');
let errors = { };
let zoneAdresseCourriel = component.problemeForm.get('adresseCourrielGroup.courriel');
let zoneCourrielConfirmation = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
zoneAdresseCourriel.setValue('philippe0076@hotmail.com');
zoneCourrielConfirmation.setValue('philippe0076@hotmail.com');
let groupe = component.problemeForm.get('adresseCourrielGroup');
errors = groupe.errors|| { };
expect(errors['match']).toBeUndefined();
});

it('Zone  Adresse Courriel  et Zone  Confirmation Courriel sont valides si les valeur sont différents quand notifier par courriel ', () => {
component.gestionNotification('parCourriel');
let errors = { };
let zoneAdresseCourriel = component.problemeForm.get('adresseCourrielGroup.courriel');
let zoneCourrielConfirmation = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
zoneAdresseCourriel.setValue('philippe99@hotmail.com');
zoneCourrielConfirmation.setValue('philippe45@hotmail.com');
let groupe = component.problemeForm.get('adresseCourrielGroup');
errors = groupe.errors|| { };
expect(errors['match']).toBe(true);
});

it('Zone Telephone est activée quand notifier par messagerie texte  ', () => {
component.gestionNotification('parMessageTexte');
let zone = component.problemeForm.get('telephone');
expect(zone.status).not.toEqual('DISABLED');
});

it('Zone Adresse Courriel est désactivée quand notifier par messagerie texte  ', () => {
component.gestionNotification('parMessageTexte');
let zone = component.problemeForm.get('adresseCourrielGroup.courriel');
expect(zone.status).toEqual('DISABLED');
});

it('Zone  confirmer Courriel est désactivée quand notifier par messagerie texte  ', () => {
component.gestionNotification('parMessageTexte');
let zone = component.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
expect(zone.status).toEqual('DISABLED');
});

it('Zone  Téléphone est désactivée  sans valeur quand notifier par messagerie texte  ', () => {
component.gestionNotification('parMessageTexte');
let zone = component.problemeForm.get('telephone');
expect(zone.value).toBeNull();
});

it('Zone  Telephone est invalide  avec des caractères non numérique quand notifier par message texte', () => {
component.gestionNotification('parMessageTexte');
let errors = { };
let zone = component.problemeForm.get('telephone');
errors = zone.errors || { };
expect(errors['pattern']).toBeFalsy();
});

it('Zone  Telephone est invalide  avec 9 chiffres consécutifs quand notifier par message texte', () => {
component.gestionNotification('parMessageTexte');
let errors = { };
let zone =component.problemeForm.controls['telephone'];
zone.setValue('1'.repeat(9));
errors = zone.errors || { };
expect(errors['minlength']).toBeTruthy();
});

it('Zone  Telephone est invalide  avec 11 chiffres consécutifs quand notifier par message texte', () => {
component.gestionNotification('parMessageTexte');
let errors = { };
let zone =component.problemeForm.controls['telephone'];
zone.setValue('1'.repeat(11));
errors = zone.errors || { };
expect(errors['maxlength']).toBeTruthy();
});

it('Zone  Telephone est valide  avec 10 chiffres consécutifs quand notifier par message texte', () => {
component.gestionNotification('parMessageTexte');
let errors = { };
let zone =component.problemeForm.controls['telephone'];
zone.setValue('1'.repeat(10));
errors = zone.errors || { };
expect(errors['maxlength']).toBeFalsy();
});
});
