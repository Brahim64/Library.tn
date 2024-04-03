import { Inject, Injectable } from '@angular/core';
import { document } from '../shared/model/document';
import { Categeory } from '../shared/model/Category';
import { Type } from '../shared/model/Type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  
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
  updateDocument(doc:document):Observable<document>{
    return this.httpClient.put<document>(this.baseUrl+"documents/"+doc.id,doc,this.httpOptions)
  }
  deleteDocumentById(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+"documents/"+id)
  }
  addDocument(doc:document):Observable<document>{
    return this.httpClient.post<document>(this.baseUrl+"documents",doc,this.httpOptions);
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
  /* getDocumentsTypes(): Type[] {
    let names= new Set(this.documents.map(doc=>doc.fileType));
    let types:Type[]=[];
    names.forEach(type=>{
      types.push({name:type,count:this.documents.filter(doc=>doc.fileType==type).length})
    })
    return types;
  } */
  
}
