import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../service/document.service';
import { document } from '../shared/model/document';
import { Observable, timeInterval } from 'rxjs';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute,private documentService:DocumentService,@Inject('baseURL') private baseUrl){}
  doc:document;
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
  

}
