"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cours = void 0;
/**
 * @author : younes El mahraz
 *
 * classe Cours
 */
var Cours = /** @class */ (function () {
    /**
     * Constructeur
     * @param Id :    un attribut privé de type number.
     * @param title : un attribut privé de type string.
     * @param nbrJours : un attribut privé de type number.
     * @param etudiants : un tableau d'objets de type Etudiant
     */
    function Cours(Id, title, nbrJours, etudiants) {
        this.Id = Id;
        this.title = title;
        this.nbrJours = nbrJours;
        this.etudiants = etudiants;
    }
    Object.defineProperty(Cours.prototype, "setId", {
        /**
         * getters & setters
         */
        /**
         * Id getter & setter
         */
        set: function (Id) {
            this.Id = Id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "getId", {
        get: function () {
            return this.Id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "settitle", {
        /**
                 * title getter & setter
                 */
        set: function (title) {
            this.title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "gettitle", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "setnbrJours", {
        /**
                 * nbrJours getter & setter
                 */
        set: function (nbrJours) {
            this.nbrJours = nbrJours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "getnbrJours", {
        get: function () {
            return this.nbrJours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "setetudiants", {
        /**
                 * Etudiant[] getter & setter
                 */
        set: function (etudiants) {
            this.etudiants = etudiants;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "getetudiants", {
        get: function () {
            return this.etudiants;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * calculerMoyenneCours() qui retourne la moyenne d'un objet de type
    cours (la moyenne des moyennes des étudiants).
     */
    Cours.prototype.calculerMoyenneCours = function () {
        var sum_moyenne = 0;
        for (var index = 0; index < this.etudiants.length; index++) {
            sum_moyenne += this.etudiants[index].calculerMoyenne();
        }
        return sum_moyenne / this.etudiants.length;
    };
    /**
     *  getIndexMax() qui retourne l'indice de l’étudiant dans le tableau
    etudiants ayant la meilleure moyenne de le cours.
     */
    Cours.prototype.getIndexMax = function () {
        var max = 0;
        var indice = 0;
        max = this.etudiants[0].calculerMoyenne();
        for (var index = 0; index < this.etudiants.length - 1; index++) {
            if (max < this.etudiants[index + 1].calculerMoyenne()) {
                max = this.etudiants[index + 1].calculerMoyenne();
                indice = index + 1;
            }
        }
        return indice;
    };
    /**
     *  une méthode getNomMax() qui affiche le nom du premier étudiant ayant la
    meilleure moyenne dans le cours
     */
    Cours.prototype.getNomMax = function () {
        var max = 0;
        var Nom = this.etudiants[0].getnom;
        max = this.etudiants[0].calculerMoyenne();
        for (var index = 0; index < this.etudiants.length - 1; index++) {
            if (max < this.etudiants[index + 1].calculerMoyenne()) {
                max = this.etudiants[index + 1].calculerMoyenne();
                Nom = this.etudiants[index + 1].getnom;
            }
        }
        return Nom;
    };
    /**
     *  une méthode getMoyenneParNom(nom: string) qui affiche la moyenne du premier
    Etudiant dont le nom est passé en paramètre
     */
    Cours.prototype.getMoyenneParNom = function (nom) {
        // let moy:number=0;
        var indice = 0;
        //max=this.etudiants[0].calculerMoyenne();
        for (var index = 0; index < this.etudiants.length - 1; index++) {
            if (nom == this.etudiants[index + 1].getnom) {
                //max=this.etudiants[index+1].calculerMoyenne();
                indice = index + 1;
            }
        }
        return this.etudiants[indice].calculerMoyenne();
    };
    return Cours;
}());
exports.Cours = Cours;
