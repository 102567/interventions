import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'inter-problème',
  templateUrl: './problème.component.html',
  styleUrls: ['./problème.component.css']
})
export class ProblèmeComponent implements OnInit {

  problemeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',[Validators.minLength(3),Validators.required]]
      //quantite: ['', [Validators.range(1, 3)]]
    });
  }

}
