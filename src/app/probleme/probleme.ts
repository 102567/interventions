export interface IProbleme {
    Id: number,
    prenom: string,
    nom: string,
    noProbleme?: number,
    notification: string,
    courriel: string,
    courrielConfirmation: string,
    telephone: string,
    noUnite: string,
    descriptionProbleme: string,
    dateProbleme?: Date 
}