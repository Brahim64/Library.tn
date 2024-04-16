import { Inject, Injectable } from '@angular/core';
import { Document } from '../shared/model/document';
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
  /* getAllDocumentsByTitle(title: string): Document[] {
    return this.getAllDocuments().filter(doc=>doc.title.toLowerCase().includes(title.toLowerCase()))
  } */
  getAllDocuments():Observable<Document[]>{
    return this.httpClient.get<Document[]>(this.baseUrl+"api/v1/documents");
  }
  getDocumentById(id:number):Observable<Document>{
    /* return this.documents.find(doc=>doc.id==id); */
    return this.httpClient.get<Document>(this.baseUrl+"api/v1/documents/"+id);
    
  }
  updateDocument(doc:Document):Observable<Document>{
    return this.httpClient.put<Document>(this.baseUrl+"api/v1/documents/"+doc.id,doc,this.httpOptions)
  }
  deleteDocumentById(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+"api/v1/documents/"+id)
  }
  addDocument(doc:Document):Observable<Document>{
    return this.httpClient.post<Document>(this.baseUrl+"api/v1/documents",doc,this.httpOptions);
  }
  
 /* getDocumentsByThemes(theme:string):Observable<Document[]>{

    return this.httpClient.get<Document[]>(this.baseUrl+"documents/"+theme);

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
