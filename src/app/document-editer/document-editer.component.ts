import { Component, Input, OnInit } from '@angular/core';
import {Document } from '../shared/model/document';
import { DocumentService } from '../service/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadServiceService } from '../service/file-upload-service.service';
import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-document-editer',
  templateUrl: './document-editer.component.html',
  styleUrls: ['./document-editer.component.css']
})
export class DocumentEditerComponent implements OnInit{
  filenames:string[];
  //this is used for updating a document
  @Input() docu:Document;

  @Input() add:boolean=false;
  //this is uded for adding a document
  document:Document={
    id:-1,
    title:"",
    author: "",
    theme: "",
    fileType: "",
    resume: "",
    file: "",
    photo: "",
    modified:false
  }

  /* upload file*/
  selectedFile?: File;
  selectedPhoto?: File;
  currentFile?: File;
  progress = 0;
  message = '';
  fileStatus={status:'',requestType:'',percent:0};


  constructor(private documentService:DocumentService,private router :Router,
    private fileUploadService:FileUploadServiceService,private route:ActivatedRoute){}
  
  ngOnInit(): void {
    if (this.add) {
      this.documentService.getAllDocuments().subscribe(res=>this.document.id=res.length)
    }else{
      this.route.paramMap.subscribe(param=>{
      this.document.id=Number(param.get('id'))
    })
    }

    
  }
  onSave(){
    this.document.dateOfPub=new Date();
    if (this.add) {
      this.fileUploadService.upload(this.selectedPhoto,this.selectedFile,this.document).subscribe();
  
      /* console.log(this.document.author)
      this.documentService.addDocument(this.document).subscribe(()=>{console.log('done');}
      ) */
      this.selectedPhoto=undefined;
      this.selectFile=undefined;
      window.location.reload();
    }
    else{
      this.fileUploadService.update(this.selectedPhoto,this.selectedFile,this.document).subscribe();
      this.selectedPhoto=undefined;
      this.selectFile=undefined;
      window.location.reload();
    }
    
  }
  /*upload file*/
  selectPhoto(event: any): void {
    this.selectedPhoto = event.target.files[0];
    console.log(this.selectedPhoto)
  }
  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  upload(event:any): void {
    this.fileUploadService.upload(event.target.files[0],event.target.files[1],this.document).subscribe(
      event=>{
        console.log(event)
      },
      (error:HttpErrorResponse)=>console.log(error)
    );







    
    /* this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.fileUploadService.upload(this.currentFile,id).subscribe({
          next: (event: any) => {  
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total); 
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.router.navigateByUrl('/documents/' +id);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    } */
  }
  download(filename:string): void {
    
    this.fileUploadService.download(filename).subscribe(
      event=>{
        console.log(event)
      },
      (error:HttpErrorResponse)=>console.log(error)
    );
  }
 /*  private reportProgress(httpEvent: HttpEvent<string[]|Blob>) :void{
    switch(httpEvent.type){
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded,httpEvent.total,'Uploading');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded,httpEvent.total,'Downloading');
        break;  
      case HttpEventType.ResponseHeader:
        console.log('Header returned',httpEvent)
        break;   
      case HttpEventType.Response:
        if(httpEvent.body instanceof Array){
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename)
          }
        }else{
          saveAs(new File([httpEvent.body],httpEvent.headers.get('File-Name'),
             { type:`${httpEvent.headers.get('Content-Type')};charset=utf-8`}))
        }
        break;   
      default:
        console.log(httpEvent);
        break;
    }
  } */
  private updateStatus(loaded: number, total: number, requestType: string) {
    this.fileStatus.status='progress'
    this.fileStatus.requestType=requestType
    this.fileStatus.percent=Math.round((100*loaded/total));

  }


}
