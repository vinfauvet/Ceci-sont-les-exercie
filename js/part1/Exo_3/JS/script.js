var identifiant = prompt('Identifiant : ');
var mdp = prompt('Mot de passe : ');
var pp = document.getElementById('pp');

if (identifiant == "Zleekezl" && mdp == "*****") {
  alert('Connexion réussi');
  pp.innerHTML = identifiant + " vous vous êtes identifié.";
}
else {
  alert('Erreur, veuillez recommencez');
  pp.innerHTML = "Vous ne vous êtes pas identifié."
}
