/**
 * @author : younes El mahraz
 * 
 * classe etudiant
 */
export class Etudiant 
{
    /**
     * attributs
     */
    private    Id : number;
    private   nom : string
       notes : number[]=[];

/**
 * 
 * @param Id : un attribut privée de type nombre.
 * @param nom : un attribut privée de type chaîne de caractères
 */
constructor(Id:number,nom:string)
{
        this.Id=Id;
        this.nom=nom;
        this.notes=[];
}

/**
 * getters & setters
 */


        /**
         * Id getter & setter
            */
        set setId(Id : number) 
        {
            this.Id = Id;
        }


        get getId() : number {
            return this.Id;
        }


        /**
         * nom getter & setter
         */
        set setnom(nom : string) {
            this.nom = nom;
        }


        get getnom() : string {
            return this.nom;
        }




        
  /**
         * notes getter & setter
         */


set setnotes(notes : number[]) {
    this.notes = notes;
}


 get getnotes() : number[] {
    return this.notes;
}


/**
 * la méthode calculerMoyenne() : permet de retourner la moyenne de notes d'un
étudiant
 */
public calculerMoyenne() :number
{
    
        let moy:number=0;
        let som:number=0;

        for (let index = 0; index < this.notes.length; index++) 
        {
            som+=this.notes[index];    
        }

        return som/this.notes.length;

}

/**
 * méthode getMax()  qui permet de retourner respectivement la
note max  d'un étudiant.
 */
public getMax() :number
{
    let max:number=this.notes[0];
    for (let index = 0; index < this.notes.length; index++) 
    {

        if(max<this.notes[index+1])
        {
            max=this.notes[index+1];
        }
     
        
    }
return max;

}

/**
 * méthode  getMin() qui permet de retourner respectivement la
note min d'un étudiant.
 */
public getMin():number
{
    let min:number=this.notes[0];
    for (let index = 0; index < this.notes.length; index++) 
    {
       
        
      if(min>this.notes[index+1])
      {
        min=this.notes[index+1];
      }
        
    }
return min;

}





}
