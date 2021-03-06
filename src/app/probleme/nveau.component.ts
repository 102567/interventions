import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ITypeProbleme } from './typeprobleme';
import { nombreCaractereValidator } from '../shared/caracteres-validator';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';
import { TypeProblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';
import { IProbleme } from './probleme';
import { ProblemeService } from './probleme.service';

@Component({
  selector: 'inter-nveau',
  templateUrl: './nveau.component.html',
  styleUrls: ['./nveau.component.css']
})
export class NveauComponent implements OnInit {
  problemeForm: FormGroup;
  typesProblemes: ITypeProbleme[];
  errorMessage: string;
  probleme: IProbleme;
  messageSauvegarde: string;
  
  constructor(private fb: FormBuilder, private typesProbleme: TypeProblemeService, private problemeService: ProblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',[Validators.required,Validators.minLength(3), nombreCaractereValidator.longueurMinimum(3), nombreCaractereValidator.sansEspaces()]],
      nom: ['',[Validators.required, Validators.maxLength(50)]],
      noProbleme: ['', Validators.required],
      notification: { value: 'pasNotifier', disabled: false},
      adresseCourrielGroup: this.fb.group({
        courriel: [{ value:null, disabled: true}],
        courrielConfirmation: [{ value:null, disabled: true}]
      }),
      telephone: [{ value: null, disabled: true}],
      descriptionProbleme:['',[Validators.required, Validators.minLength(5)]],
      noUnite:[''],
      dateProbleme:{value:Date(), disabled:true}
    });
    
    this.typesProbleme.obtenirTypesProbleme()
     .subscribe(typ => this.typesProblemes = typ,
                error => this.errorMessage = <any>error);

    this.problemeForm.get('notification').valueChanges
    .subscribe(value => this.gestionNotification(value));
  }

  gestionNotification(typeProbleme : String ): void{
    
    const adresseCourrielGroupControl = this.problemeForm.get('adresseCourrielGroup');
    const adresseCourrielControl = this.problemeForm.get('adresseCourrielGroup.courriel');
    const courrielConfirmationControl = this.problemeForm.get('adresseCourrielGroup.courrielConfirmation');
    const telephoneControl = this.problemeForm.get('telephone');

    adresseCourrielControl.clearValidators();
    adresseCourrielControl.reset();
    adresseCourrielControl.disable();

    courrielConfirmationControl.clearValidators();
    courrielConfirmationControl.reset();
    courrielConfirmationControl.disable();

    telephoneControl.clearValidators();
    telephoneControl.reset();
    telephoneControl.disable();

    if(typeProbleme === 'parCourriel'){
      adresseCourrielGroupControl.setValidators([Validators.compose([emailMatcherValidator.courrielConfirmation()])]);
      adresseCourrielControl.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      adresseCourrielControl.enable();
      courrielConfirmationControl.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      courrielConfirmationControl.enable();
      
    }else{
      if(typeProbleme === 'parMessageTexte'){
        telephoneControl.setValidators([Validators.required,  Validators.pattern('[0-9]+'), Validators.minLength(10),  Validators.maxLength(10)]);
        telephoneControl.enable();
       }
    } 

    adresseCourrielGroupControl.updateValueAndValidity();
    adresseCourrielControl.updateValueAndValidity();
    courrielConfirmationControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
  }

  save(): void {
    if (this.problemeForm.dirty && this.problemeForm.valid) {
         this.probleme = this.problemeForm.value;
         // Affecter les valeurs qui proviennent du fg le plus interne.
         this.probleme.prenom =  this.problemeForm.get('prenom').value;
         this.probleme.nom =  this.problemeForm.get('nom').value;
         this.probleme.noProbleme =  this.problemeForm.get('noProbleme').value;
         this.probleme.courriel =  this.problemeForm.get('adresseCourrielGroup.courriel').value;
         this.probleme.courrielConfirmation =  this.problemeForm.get('adresseCourrielGroup.courrielConfirmation').value;
         this.probleme.telephone =  this.problemeForm.get('telephone').value;
         this.probleme.descriptionProbleme =  this.problemeForm.get('descriptionProbleme').value;
         this.probleme.dateProbleme = new Date();
 
     
        this.problemeService.saveProbleme(this.probleme)
            .subscribe( // on s'abonne car on a un retour du serveur à un moment donné avec la callback fonction
                () => this.onSaveComplete(),  // Fonction callback
                (error: any) => this.errorMessage = <any>error
            );
    } 
  }
  
  onSaveComplete(): void {
    this.problemeForm.reset();  // Pour remettre Dirty à false.  Autrement le Route Guard va dire que le formulaire n'est pas sauvegardé
    this.messageSauvegarde = 'Votre demande a bien été sauvegardée.  Nous vous remercions.';
    this.ngOnInit();
  } 
}
