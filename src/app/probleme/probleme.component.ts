import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import {  nombreCaractereValidator } from '../shared/caracteres-validator';
import { TypeProblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeProbleme';

@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class problemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProblemes: ITypeProbleme[];
  errorMessage: string;

  constructor(private fb: FormBuilder, private problemes: TypeProblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',[Validators.required,Validators.minLength(3), nombreCaractereValidator.longueurMinimum(3), nombreCaractereValidator.sansEspaces()]],
      nom: ['',[Validators.required, Validators.maxLength(50)]],
      noProbleme: ['', Validators.required],
      appliquerNotificatons: { value: 'pasNotification', disabled: false},
      courrielGroup: this.fb.group({
        courriel: [{ value:'', disabled: true}],
        courrielConfirmation: [{ value:'', disabled: true}]
      }),
      telephone: [{ value: '', disabled: true}]
    });

    this.problemes.obtenirTypesProbleme()
    .subscribe(probleme => this.typesProblemes = probleme,
               error => this.errorMessage = <any>error);
  }

  gestionNotification(typeprobleme : String ): void{
    const adresseCourrielControGroupControl = this.problemeForm.get('addresseCourrielGroup')
  }

}
