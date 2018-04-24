import { nombreCaractereValidator } from "./caracteres-validator";
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