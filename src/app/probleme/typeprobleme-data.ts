import { ITypeProbleme } from "./TypeProbleme";
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TypeProblemeData implements InMemoryDbService {
    createDb() {
        let typesProblemes: ITypeProbleme[] = [
            {
                'id': 1,
                'descriptionTypeProbleme': 'probleme avec la souris'
            },
            {
                'id': 2,
                'descriptionTypeProbleme': 'probleme de clavier'
            },
            {
                'id': 3,
                'descriptionTypeProbleme': 'probleme d\'accès Internet'
            },
            {
                'id': 4,
                'descriptionTypeProbleme': 'probleme avec un logiciel'
            },
            {
                'id': 5,
                'descriptionTypeProbleme': 'probleme d\'imprimante'
            },
            {
                'id': 6,
                'descriptionTypeProbleme': 'Carte graphique'
            },
            {
                'id': 7,
                'descriptionTypeProbleme': 'Carte mère'
            },
            {
                'id': 8,
                'descriptionTypeProbleme': 'Autre'
            }
        ];       
        //return { probleme, typesprobleme};
        return {typesProblemes};        
    }
}