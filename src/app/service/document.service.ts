import { Inject, Injectable } from '@angular/core';
import { document } from '../shared/model/document';
import { Categeory } from '../shared/model/Category';
import { Type } from '../shared/model/Type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  
  documents:document[]=[
      
    /* { id:1,
      title:"Algorthmique",
      dateOfPub:new Date(),
      author:'Rick and Morty',
      theme:"computer science",
      keywords:["trie","algorithme","complexté","array","sorting"],
      fileType:"book",
      resume:"learn how to solve algorithmic problems ...",
      file:"",
      photo:"./assets/images/algo.jpg"
    }
    ,
    { id:2,
      title:"Angular",
      dateOfPub:new Date(),
      author:'gang of four',
      theme:"computer science",
      keywords:["directives","pipe","routing","components","injection"],
      fileType:"Memoire",
      resume:"learn angular 16 ...",
      file:"",
      photo:"./assets/images/angular.jpg"
    },
    { id:3,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"Rapport",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    },
    { id:4,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"These",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    },
    { id:5,
      title:"Algorthmique",
      dateOfPub:new Date(),
      author:'Rick and Morty',
      theme:"computer science",
      keywords:["trie","algorithme","complexté","array","sorting"],
      fileType:"Rapport",
      resume:"learn how to solve algorithmic problems ...",
      file:"",
      photo:"./assets/images/algo.jpg"
    },
    { id:6,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"Memoire",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    },
    { id:7,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"book",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    } */
  ]
  constructor(private httpClient:HttpClient,@Inject('baseURL') private baseUrl) { }
  /* getAllDocumentsByTitle(title: string): document[] {
    return this.getAllDocuments().filter(doc=>doc.title.toLowerCase().includes(title.toLowerCase()))
  } */
  getAllDocuments():Observable<document[]>{
    return this.httpClient.get<document[]>(this.baseUrl+'documents');
  }
  getDocumentById(id:number):Observable<document>{
    /* return this.documents.find(doc=>doc.id==id); */
    return this.httpClient.get<document>(this.baseUrl+"documents/"+id);
    
  }
  getDocumentsCategories():Categeory[]{
    let docs:document[]=[]
    let themes:string[]=[];
    let new_themes:Set<string>;
    let categ:Categeory[]=[];
    this.httpClient.get<document[]>(this.baseUrl+'documents').subscribe(res => {
      docs=res
      console.log(docs)
    });
    
    docs.forEach(doc=>{
      themes.push(doc.theme);
    })
    new_themes=new Set(themes)
    new_themes.forEach(elt => {
      categ.push({name:elt,count:themes.filter(theme=>theme==elt).length})
    });
    return categ;
  }
 /* getDocumentsByThemes(theme:string):Observable<document[]>{

    return this.httpClient.get<document[]>(this.baseUrl+"documents/"+theme);

     let names= new Set(this.documents.map(doc=>doc.theme));
    let categories:Categeory[]=[];
    names.forEach(categ=>{
      categories.push({name:categ,count:this.documents.filter(doc=>doc.theme==categ).length})
    })
    return categories; 
  }*/
  getDocumentsTypes(): Type[] {
    let names= new Set(this.documents.map(doc=>doc.fileType));
    let types:Type[]=[];
    names.forEach(type=>{
      types.push({name:type,count:this.documents.filter(doc=>doc.fileType==type).length})
    })
    return types;
  }
  
}
