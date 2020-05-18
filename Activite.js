"use strict";
/**
 * @author : younes El mahraz
 *
 * classe activite
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activite = void 0;
var Activite = /** @class */ (function () {
    /**
     * Constructeur
     *
     * @param Id   un attribut privé de type string
     * @param title un attribut privé de type string
     * @param Description  un attribut privé de type string.
     * @param urlYoutube un attribut privé de type string
     * @param type un attribut privé de type enum ( explorer, pratiquer, etendre}
     */
    function Activite(Id, title, Description, urlYoutube, type) {
        this.Id = Id;
        this.title = title;
        this.Description = Description;
        this.urlYoutube = urlYoutube;
        this.type = type;
    }
    Object.defineProperty(Activite.prototype, "getId", {
        /**
         * getters & setters
         */
        /**
         * Id getter & setter
         */
        get: function () {
            return this.Id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "setId", {
        set: function (Id) {
            this.Id = Id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "gettitle", {
        /**
         * title getter & setter
         */
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "settitle", {
        set: function (title) {
            this.title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "getDescription", {
        /**
         * Description getter & setter
         */
        get: function () {
            return this.Description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "setDescription", {
        set: function (Description) {
            this.Description = Description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "geturlYoutube", {
        /**
         * urlYoutube getter & setter
         */
        get: function () {
            return this.urlYoutube;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "seturlYoutube", {
        set: function (urlYoutube) {
            this.urlYoutube = urlYoutube;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "gettype", {
        /**
        * type enum  getter & setter
        */
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "settype", {
        set: function (type) {
            this.type = type;
        },
        enumerable: false,
        configurable: true
    });
    return Activite;
}());
exports.Activite = Activite;
/**
 *  enum ( explorer, pratiquer, etendre}
 */
var Type;
(function (Type) {
    Type[Type["explorer"] = 0] = "explorer";
    Type[Type["pratiquer"] = 1] = "pratiquer";
    Type[Type["etendre"] = 2] = "etendre";
})(Type || (Type = {}));
