var leprenom = document.getElementById('prenom');

var prenom = prompt('Comment t\'appelles tu ?');

alert('Bonjour ' + prenom + '.');

leprenom.innerHTML = 'Content de te connaitre ' + prenom + ' :D';
