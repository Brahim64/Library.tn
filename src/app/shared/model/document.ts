export class document{
    id?:number;
    title!:string;
    author?:string;
    theme?:string;
    keywords?:string[];
    resume?:string;
    dateOfPub?:Date;
    fileType?:string; //rapport , memoire ....
    file?:string;
    photo!:string;
    modified?:boolean=false;
}