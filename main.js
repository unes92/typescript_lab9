"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Etudiant_1 = require("./Etudiant");
var Cours_1 = require("./Cours");
/**
 * @author : younes El mahraz
 *
 * Main de l'application
 */
/**
 *  Instanciation de trois objets étudiants + leurs notes
 */
var e1 = new Etudiant_1.Etudiant(1, "aziz");
e1.notes.push(14);
e1.notes.push(18);
var e2 = new Etudiant_1.Etudiant(2, "hassan");
e2.notes.push(20);
e2.notes.push(14);
var e3 = new Etudiant_1.Etudiant(3, "mohamed");
e3.notes.push(12);
e3.notes.push(14);
/**
 * Afiicher leur noms + calculer leur moyenne
 */
console.log("  e1-  " + e1.getnom + "  -  " + e1.calculerMoyenne());
console.log("  e2-  " + e2.getnom + "  -  " + e2.calculerMoyenne());
console.log("  e3-  " + e3.getnom + "  -  " + e3.calculerMoyenne());
/**
 * Afiicher les etudiants et leur notes max et le min
 */
console.log("  e1-  " + e1.getnom + " / sa note maximale : " + e1.getMax() + " / sa note minimal : " + e1.getMin());
console.log("  e2-  " + e2.getnom + " / sa note maximale : " + e2.getMax() + " / sa note minimal : " + e2.getMin());
console.log("  e3-  " + e3.getnom + " / sa note maximale : " + e3.getMax() + " / sa note minimal : " + e3.getMin());
/**
 *  creer un cours et affectation des etudiants  au même cours
 */
var cours1 = new Cours_1.Cours(1, "math", 12, [e1, e2, e3]);
//console.log(cours1.etudiants[0].getnom);
//console.log(cours1.etudiants[1].getnom);
/*console.log("nbr etudiants :  "+cours1.etudiants.length);*/
console.log("la moyenne de cours / classe :   " + cours1.calculerMoyenneCours());
console.log("l'indice de l’étudiant dans le tableau qui a la meilleure moyenne  : " + cours1.getIndexMax());
console.log("Son nom : " + cours1.getNomMax());
console.log("la moyenne de aziz : " + cours1.getMoyenneParNom("aziz"));
