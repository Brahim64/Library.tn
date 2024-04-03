import { Component, Input, OnInit } from '@angular/core';
import {document } from '../shared/model/document';
import { DocumentService } from '../service/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-editer',
  templateUrl: './document-editer.component.html',
  styleUrls: ['./document-editer.component.css']
})
export class DocumentEditerComponent implements OnInit{
  
  //this is used for updating a document
  @Input() docu:document;

  @Input() add:boolean=false;
  //this is uded for adding a document
  document:document={
    id:-1,
    title:"",
    author: "",
    theme: "",
    keywords: [],
    fileType: "",
    resume: "",
    file: "",
    photo: "images/default.jpg"
  }
  constructor(private documentService:DocumentService,private router :Router,private route:ActivatedRoute){}
  
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
      this.documentService.addDocument(this.document).subscribe(()=>{console.log('done')})
      window.location.reload();
    }
    else{
      this.documentService.updateDocument(this.document).subscribe(()=>{
      window.location.reload();
    })
    }
    
  }

}
