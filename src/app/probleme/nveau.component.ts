import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ITypeProbleme } from './typeprobleme';
import { nombreCaractereValidator } from '../shared/caracteres-validator';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';
import { TypeProblemeService } from './typeprobleme.service';

@Component({
  selector: 'inter-nveau',
  templateUrl: './nveau.component.html',
  styleUrls: ['./nveau.component.css']
})
export class NveauComponent implements OnInit {
  problemeForm: FormGroup;
  typesProblemes: ITypeProbleme[];
  errorMessage: string;
  
  constructor(private fb: FormBuilder, private typesProbleme: TypeProblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',[Validators.required,Validators.minLength(3), nombreCaractereValidator.longueurMinimum(3), nombreCaractereValidator.sansEspaces()]],
      nom: ['',[Validators.required, Validators.maxLength(50)]],
      noProbleme: ['', Validators.required],
      notification: { value: 'pasNotification', disabled: false},
      adresseCourrielGroup: this.fb.group({
        courriel: [{ value:'', disabled: true}],
        courrielConfirmation: [{ value:'', disabled: true}]
      }),
      telephone: [{ value: '', disabled: true}]
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
      adresseCourrielControl.enable();
      adresseCourrielGroupControl.setValidators([Validators.compose([emailMatcherValidator.courrielConfirmation()])]);
      courrielConfirmationControl.enable();
      adresseCourrielControl.setValidators([Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      courrielConfirmationControl.setValidators([Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      
    }else{
      if(typeProbleme === 'parMessageTexte'){
        telephoneControl.enable();
        telephoneControl.setValidators([Validators.required,  Validators.pattern('[0-9]+'), Validators.minLength(10),  Validators.maxLength(10)]);
      }
    }

    adresseCourrielGroupControl.updateValueAndValidity();
    adresseCourrielControl.updateValueAndValidity();
    courrielConfirmationControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
  }
}
