import {Etudiant} from './Etudiant'
/**
 * @author : younes El mahraz
 * 
 * classe Cours
 */
export class Cours
{
     /**
     * attributs
     */
   private Id : number;
   private  title : string;
   private  nbrJours :number;
    etudiants : Etudiant[]

/**
 * Constructeur 
 * @param Id :    un attribut privé de type number.
 * @param title : un attribut privé de type string.
 * @param nbrJours : un attribut privé de type number.
 * @param etudiants : un tableau d'objets de type Etudiant
 */
constructor( Id : number,   title : string,  nbrJours :number, etudiants : Etudiant[])
{
this.Id=Id;
this.title=title;
this.nbrJours=nbrJours;
this.etudiants=etudiants;
}


        /**
         * getters & setters
         */


        /**
         * Id getter & setter
         */



            set setId(Id:number)
            {
            this.Id=Id;
            }

            get getId():number
            {
                return this.Id;
            }



/**
         * title getter & setter
         */


        set settitle(title:string)
        {
        this.title=title;
        }

        get gettitle():string
        {
            return this.title;
        }


/**
         * nbrJours getter & setter
         */

            set setnbrJours(nbrJours:number)
            {
            this.nbrJours=nbrJours;
            }

            get getnbrJours():number
            {
                return this.nbrJours;
            }


/**
         * Etudiant[] getter & setter
         */

            set setetudiants(etudiants:Etudiant[])
            {
            this.etudiants=etudiants;
            }

            get getetudiants():Etudiant[]
            {
                return this.etudiants;
            }

/**
 * calculerMoyenneCours() qui retourne la moyenne d'un objet de type
cours (la moyenne des moyennes des étudiants).
 */

 public calculerMoyenneCours() :number  {
    let sum_moyenne:number=0;
    for (let index = 0; index < this.etudiants.length; index++) {
      sum_moyenne+=this.etudiants[index].calculerMoyenne();
        
    }
    return sum_moyenne/this.etudiants.length;
}


/**
 *  getIndexMax() qui retourne l'indice de l’étudiant dans le tableau
etudiants ayant la meilleure moyenne de le cours.
 */
public getIndexMax():number
{
    let max:number=0;
    let indice:number=0;
    max=this.etudiants[0].calculerMoyenne();
    for (let index = 0; index < this.etudiants.length-1; index++) 
    {

        if(max<this.etudiants[index+1].calculerMoyenne())
        {
            max=this.etudiants[index+1].calculerMoyenne();
            indice=index+1;
        }
     
        
    }

return indice;

}


/**
 *  une méthode getNomMax() qui affiche le nom du premier étudiant ayant la
meilleure moyenne dans le cours
 */
public getNomMax():string
{
    let max:number=0;
    let Nom:string=this.etudiants[0].getnom;

    max=this.etudiants[0].calculerMoyenne();
    for (let index = 0; index < this.etudiants.length-1; index++) 
    {

        if(max<this.etudiants[index+1].calculerMoyenne())
        {
            max=this.etudiants[index+1].calculerMoyenne();
            Nom=this.etudiants[index+1].getnom;
        }
     
        
    }

return Nom;
}


/**
 *  une méthode getMoyenneParNom(nom: string) qui affiche la moyenne du premier
Etudiant dont le nom est passé en paramètre
 */

public getMoyenneParNom(nom:string):number
{
   // let moy:number=0;
    let indice:number=0;
    //max=this.etudiants[0].calculerMoyenne();
    for (let index = 0; index < this.etudiants.length-1; index++) 
    {

        if(nom==this.etudiants[index+1].getnom)
        {
            //max=this.etudiants[index+1].calculerMoyenne();
            indice=index+1;
        }
     
        
    }

return this.etudiants[indice].calculerMoyenne();

}

}

