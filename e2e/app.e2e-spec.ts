import { AppPage } from './app.po';

describe('interventions App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Déclarer un problème');
  });

  it('doit activer le bouton sauvegarder avec champs valides scénario nominal', () => {
    page.setChampsValidesScenarioNominal();
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });

  it('doit activer le bouton sauvegarder avec champs valides scénario alternatif Par message TEXTE', () => {
    page.setChampsValidesScenarioAlternatifParMessageTexte();
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });

  it('doit activer le bouton sauvegarder avec champs valides scénario alternatif Par courriel', () => {
    page.setChampsValidesScenarioAlternatifParCourriel();
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });

  it('zone descriptionProblème a une bordure rouge si le nombre de caractère est insuffisant', () => {
    page.setZoneDescriptionProblemeCaractereInsuffisant();
    expect(page.obtenirClasseZoneDescriptionProbleme()).toContain('is-invalid');
  });

  it('zone descriptionProblème a une bordure rouge si le nombre de caractère est insuffisant', () => {
    page.setZoneDescriptionProblemeCaractereSuffisant();
    expect(page.obtenirClasseZoneDescriptionProbleme()).toContain('is-valid');
  });
});
