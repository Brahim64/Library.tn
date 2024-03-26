export class document{
    id!:number;
    title!:string;
    author?:string;
    theme?:string;
    keywords?:string[];
    resume?:string;
    dateOfPub!:Date;
    fileType?:string;
    file?:string;
    photo!:string;
}