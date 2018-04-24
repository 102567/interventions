import { ValidatorFn, AbstractControl } from "@angular/forms";

export class nombreCaractereValidator{
    static sansEspace(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value.trim().length > 0){
                return { 'sansEspace': true};
            }
            return { 'sansEspace': false};
        };
    }
}