import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../service/document.service';
import { Document } from '../shared/model/document';
import { Observable, timeInterval, timeout } from 'rxjs';
import { FileUploadServiceService } from '../service/file-upload-service.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute,
    private fileuploadService:FileUploadServiceService,
    private documentService:DocumentService,@Inject('baseURL') private baseUrl,
  private router:Router){}
  doc:Document;
  docId:number;
  isLoading:boolean=true;
  baseURL=this.baseUrl;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.docId=Number(param.get('id'))
      console.log(this.docId)
    })
    
    this.documentService.getDocumentById(this.docId).subscribe(res=>{
        this.doc=res
        console.log(res)
        
        this.isLoading=false
      })
    
  }
  onDelete(){
    this.documentService.deleteDocumentById(this.docId).subscribe(()=>{
      setTimeout(() => { // Reschedule itself
      }, 800);
      setTimeout(() => { // Reschedule itself
      }, 1000);
      this.router.navigateByUrl("documents")
    });
    
  }
  onDownload(){
    console.log(this.doc.file)
    this.fileuploadService.download(this.doc.file)
  }
  

}
