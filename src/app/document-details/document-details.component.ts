import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../service/document.service';
import { document } from '../shared/model/document';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit{
  doc:document;
  docId:number;
  constructor(private route:ActivatedRoute,private documentService:DocumentService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.docId=Number(param.get('id'))
      
      this.doc=this.documentService.getDocumentById(this.docId)
      console.log(this.doc)
      
    })
    
  }
  

}
