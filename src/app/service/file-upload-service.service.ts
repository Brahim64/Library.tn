import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../shared/model/document';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  }


  constructor(private http: HttpClient,
    @Inject('baseURL') private baseUrl) { }



    upload(photo: File,file:File,doc:Document): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('photo',photo);
      formData.append('file', file);
      formData.append('details',JSON.stringify(doc).toString());
      console.log(JSON.stringify(doc).toString())
  
      const req = new HttpRequest('POST', `${this.baseUrl}api/v1/documents`, formData);
  
      return this.http.request(req);
    }
    update(photo: File,file:File,doc:Document): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('photo',photo);
      formData.append('file', file);
      formData.append('details',JSON.stringify(doc).toString());
      console.log(JSON.stringify(doc).toString())
  
      const req = new HttpRequest('PUT', `${this.baseUrl}api/v1/documents/${doc.id}`, formData);
  
      return this.http.request(req);
    }
   
  /* upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.baseUrl}v1/documents`, formData, {
      reportProgress: true,
      observe: 'events'
    });

  }  */
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.baseUrl}api/v1/documents/file/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType:'blob'
    });

  } 
 /*
  upload(file: File, id: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<HttpEvent<any>>(`${this.baseUrl}upload/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    })
  }*/

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

}
