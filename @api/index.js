const fs = require('fs');

function SecurityCheck(nomDossier, chemin) {
  const fichiers = fs.readdirSync(chemin); // Lire le contenu du répertoire de chemin

  for (let i = 0; i < fichiers.length; i++) {
    const nomFichier = fichiers[i];
    const stat = fs.statSync(chemin + '/' + nomFichier);

    if (stat.isDirectory() && nomFichier === nomDossier) {
      return true; // Le dossier recherché a été trouvé
    }
  }

  return false; // Le dossier recherché n'a pas été trouvé
}

// Exemple d'utilisation
const Check1 = SecurityCheck('IIS', '/@api/IIS');
const Check2 = SecurityCheck('@api', '/@api/IIS/@api');
const Check3 = SecurityCheck('Examples', '/@api/IIS/@api/Examples');
const Check4 = SecurityCheck('loading-Infos', '/@api/IIS/@api/loading-Infos');
const Check5 = SecurityCheck('src', '/@api/IIS/@api/src');
const Check6 = SecurityCheck('scripts', '/@api/IIS/@api/src/scripts');
const Check7 = SecurityCheck('Games', '/@api/IIS/@api/src/scripts/Games');
const Check8 = SecurityCheck('Utilitaires', '/@api/IIS/@api/src/scripts/Utilitaires');
const Check9 = SecurityCheck('Games', '/@api/IIS/@api/Exeamples/Games');
const Check10 = SecurityCheck('Utilitaires', '/@api/IIS/@api/Examples/Utilitaires');
const Check11 = SecurityCheck('informations', '/@api/IIS/@api/loading-Infos/informations');

if (Check1) {
  console.log('Vérification n1 => OK');
} else {
  console.log('Une erreur s\'est produite lors de la vérification 1...');
}
if (Check2) {
    console.log('Vérification n2 => OK');
} else {
    console.log('Une erreur s\'est produite lors de la vérification 2...');
}
if (Check3) {
    console.log('Vérification n3 => OK');
} else {
    console.log('Une erreur s\'est produite lors de la vérification 3...');
}
if (Check4) {
      console.log('Vérification n4 => OK');
} else {
      console.log('Une erreur s\'est produite lors de la vérification 4...');
}
if (Check5) {
      console.log('Vérification n5 => OK');
} else {
      console.log('Une erreur s\'est produite lors de la vérification 5...');
}
if (Check6) {
    console.log('Vérification n6 => OK');
} else {
    console.log('Une erreur s\'est produite lors de la vérification 6...');
}
if (Check7) {
    console.log('Vérification n7 => OK');
} else {
      console.log('Une erreur s\'est produite lors de la vérification 7...');
}
if (Check8) {
      console.log('Vérification n8 => OK');
} else {
      console.log('Une erreur s\'est produite lors de la vérification 8...');
}
if (Check9) {
    console.log('Vérification n9 => OK');
} else {
    console.log('Une erreur s\'est produite lors de la vérification 9...');
}
if (Check10) {
      console.log('Vérification n10 => OK');
} else {
      console.log('Une erreur s\'est produite lors de la vérification 10...');
}
if (Check11) {
    console.log('Vérification n11 => OK');
} else {
    console.log('Une erreur s\'est produite lors de la vérification 11...');
}