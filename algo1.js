/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

/* Algo sans fonction :
let sieges = 100;
let colonnes = 26;
let arr = [];
for (let i = 1; i <= colonnes; i++) {
  for (let j = 1; j <= sieges; j++) {
    arr[0] = i;
    arr[1] = j;
    console.log(arr.join('-'));
  }
}
*/

const listeSieges = (nbColonnes, nbSieges) => {
	let arr = [];
	for (let i = 1; i <= nbColonnes; i++) {
		for (let j = 1; j <= nbSieges; j++) {
			arr[0] = i;
			arr[1] = j;
			console.log(arr.join('-'));
		}
	}
};
console.log(listeSieges(26, 100));
