import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { VerifierCaracteresValidator } from '../shared/caracteres-validator';
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
      prenom: ['',[Validators.required, VerifierCaracteresValidator.longueurValide(3)]],
      nom: ['',[Validators.required,VerifierCaracteresValidator.longueurValide(3)]],
      noProbleme: ['', Validators.required]
    });

    this.problemes.obtenirTypesProbleme()
    .subscribe(probleme => this.typesProblemes = probleme,
               error => this.errorMessage = <any>error);
  }

}
