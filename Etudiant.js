"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
/**
 * @author : younes El mahraz
 *
 * classe etudiant
 */
var Etudiant = /** @class */ (function () {
    /**
     *
     * @param Id : un attribut privée de type nombre.
     * @param nom : un attribut privée de type chaîne de caractères
     */
    function Etudiant(Id, nom) {
        this.notes = [];
        this.Id = Id;
        this.nom = nom;
        this.notes = [];
    }
    Object.defineProperty(Etudiant.prototype, "setId", {
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
    Object.defineProperty(Etudiant.prototype, "getId", {
        get: function () {
            return this.Id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "setnom", {
        /**
         * nom getter & setter
         */
        set: function (nom) {
            this.nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "getnom", {
        get: function () {
            return this.nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "setnotes", {
        /**
               * notes getter & setter
               */
        set: function (notes) {
            this.notes = notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "getnotes", {
        get: function () {
            return this.notes;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * la méthode calculerMoyenne() : permet de retourner la moyenne de notes d'un
    étudiant
     */
    Etudiant.prototype.calculerMoyenne = function () {
        var moy = 0;
        var som = 0;
        for (var index = 0; index < this.notes.length; index++) {
            som += this.notes[index];
        }
        return som / this.notes.length;
    };
    /**
     * méthode getMax()  qui permet de retourner respectivement la
    note max  d'un étudiant.
     */
    Etudiant.prototype.getMax = function () {
        var max = this.notes[0];
        for (var index = 0; index < this.notes.length; index++) {
            if (max < this.notes[index + 1]) {
                max = this.notes[index + 1];
            }
        }
        return max;
    };
    /**
     * méthode  getMin() qui permet de retourner respectivement la
    note min d'un étudiant.
     */
    Etudiant.prototype.getMin = function () {
        var min = this.notes[0];
        for (var index = 0; index < this.notes.length; index++) {
            if (min > this.notes[index + 1]) {
                min = this.notes[index + 1];
            }
        }
        return min;
    };
    return Etudiant;
}());
exports.Etudiant = Etudiant;
