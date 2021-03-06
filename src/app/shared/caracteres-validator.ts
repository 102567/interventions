import { ValidatorFn, AbstractControl } from "@angular/forms";

export class nombreCaractereValidator { 
    static sansEspaces(): ValidatorFn{ 
        return(c: AbstractControl): { [key: string]:boolean}| null =>{
            if(c.value){
            if(c.value.trim().length > 0){
                  return null;   
            }
        }  
            
            return{ 'sansEspaces' : false};
        }
    }

    static longueurMinimum(min: number): ValidatorFn{ 
        return(c: AbstractControl): { [key: string]:boolean}| null =>{
            if(c.value){
            if(c.value.trim().length >= min ){
                  return null;   
            }
        }
            
            return{ 'longueurMinimum' : false};
        }
    }
}
