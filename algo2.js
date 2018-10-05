/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/


let min = 0;
let max = 0;
let newArray= [];
function minMax(array) {

  for (let i= 0; i < array.length; i++) {
    if (array[i] < array[i-1]) {
      min = array[i];
    } 
    if (array[i] > array[i-1]) {
      max = array[i];
    }
    
  }
  
newArray.push(min, max); 
return newArray
}

console.log(minMax([-30, 5, 43, 108, -5, -7, 89]));



