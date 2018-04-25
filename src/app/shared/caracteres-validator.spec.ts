import { nombreCaractereValidator} from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sanEspace Validator', () => {
    it('Invalide avec une chaîne de caractère vide', () => {
        let control = { value: '' };
        let validator = nombreCaractereValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['sansEspace']).toBe(false);
    });

    it('Invalide avec 10 espaces', () => {
        let control = { value: ''.repeat(10) };
        let validator = nombreCaractereValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['sansEspace']).toBe(false);
    });

    it('Valide avec 1 phrase et des mots', () => {
        let control = { value: 'Bonjour à tous' };
        let validator = nombreCaractereValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['sansEspace']).toBe(true);
    });

    it('Valide avec 3 espace des mots et 3 espaces', () => {
        let control = { value: '   test   ' };
        let validator = nombreCaractereValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['sansEspace']).toBe(true);
    });

    
});

describe('longueurMinimum', () =>{
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
        expect(result['longueurMinimum']).toBe(true);
    });

    it('Valide avec 5 espace et 5 caractères', () => {
        let control = { value: '     J’aime Angular     ' };
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);
    });
});