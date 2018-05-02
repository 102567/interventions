import { nombreCaractereValidator} from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('longueurValide Validator', () => {
    it('Invalide avec une chaîne de caractère vide', () => {
        let control = { value: '' };
        let validator = nombreCaractereValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });

    it('Invalide avec 10 espaces', () => {
        let control = { value: ''.repeat(10) };
        let validator = nombreCaractereValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });

    it('Valide avec 1 phrase et des mots', () => {
        let control = { value: 'Bonjour à tous' };
        let validator = nombreCaractereValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result == null);
    });

    it('Valide avec 3 espace des mots et 3 espaces', () => {
        let control = { value: '   test   ' };
        let validator = nombreCaractereValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result == null);
    });

    
});

describe('longueurMinimum Validator', () =>{
    it('Invalide avec 1 espace et 2 caractères', () => {
        let control = { value: ' yy' };
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
    });

    it('Invalide avec 2 espace et 1 caractères', () => {
        let control = { value: '  y' };
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
    });

    it('Valide avec 3 espace et 3 caractères', () => {
        let control = { value: '   J’aime Angular' };
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result == null);
    });

    it('Valide avec 5 espace et 5 caractères', () => {
        let control = { value: '     J’aime Angular     ' };
        let validator = nombreCaractereValidator.longueurMinimum(5);
        let result = validator(control as AbstractControl);
        expect(result == null);
    });
});