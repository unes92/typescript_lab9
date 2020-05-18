/**
 * @author : younes El mahraz
 * 
 * classe activite
 */

export class Activite
{
    /**
     * 
     * attributs
     */

    private Id : number

  
    private  title : string


    private  Description : string


    private  urlYoutube : string


     private type:Type
    
    /**
     * Constructeur 
     * 
     * @param Id   un attribut privé de type string
     * @param title un attribut privé de type string
     * @param Description  un attribut privé de type string.
     * @param urlYoutube un attribut privé de type string
     * @param type un attribut privé de type enum ( explorer, pratiquer, etendre} 
     */
    constructor(Id : number, title : string,  Description : string, urlYoutube : string, type:Type)
    {
            this.Id=Id;
            this.title=title;
            this.Description=Description;
            this.urlYoutube=urlYoutube;
            this.type=type;
    }



        /**
         * getters & setters
         */


        /**
         * Id getter & setter
         */

        get getId():number
        {
        return this.Id

        }
            
        set setId(Id:number)
        {
        this.Id=Id;

        }


        /**
         * title getter & setter
         */
        get gettitle():string
        {
        return this.title

        }
            
        set settitle(title:string)
        {
        this.title=title;

        }



        
        /**
         * Description getter & setter
         */
        get getDescription():string
        {
        return this.Description

        }
            
        set setDescription(Description:string)
        {
        this.Description=Description;

        }


        /**
         * urlYoutube getter & setter
         */
        
        get geturlYoutube():string
        {
        return this.urlYoutube

        }
            
        set seturlYoutube(urlYoutube:string)
        {
        this.urlYoutube=urlYoutube;

        }


         /**
         * type enum  getter & setter
         */
        get gettype():Type
        {
        return this.type

        }
            
        set settype(type:Type)
        {
        this.type=type;

        }








}

/**
 *  enum ( explorer, pratiquer, etendre}
 */
enum Type 
{
    explorer,
    pratiquer, 
    etendre
}