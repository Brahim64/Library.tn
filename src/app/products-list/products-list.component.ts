import { Component, Inject, OnInit, inject } from '@angular/core';
import { Document } from '../shared/model/document';
import { DocumentService } from '../service/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessengerService } from '../service/messenger.service';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  constructor(private documentService :DocumentService,private route:ActivatedRoute,private router :Router,@Inject('baseURL') private baseUrl){}
  documents:Document[];
  BaseUrl=this.baseUrl;
  hidespinner:boolean=false;
  
  
  
  ngOnInit():void {
    setTimeout(() => {
      this.hidespinner=true;
    }, 800);
    
    this.route.paramMap.subscribe(res=>{
      if (res.get('param1')) {
       /*  this.documents.filter(doc=>doc.title.toLowerCase().includes(res.get('param1').toLowerCase())) */
        this.documentService.getAllDocuments().subscribe(docs=>{
          this.documents=docs.filter(doc=>doc.title.toLowerCase().includes(res.get('param1').toLowerCase()))
        }) 
      
      }else if (res.get('type')) {
        let type=res.get("type");
        let category=res.get("category");
        if (type!=="empty" && category==="empty") {
          let tab=type.split("-")
          tab=tab.map(elt=>elt.toLowerCase())
          console.log(tab)
          this.documentService.getAllDocuments().subscribe(docs=>{
            this.documents=docs.filter(doc=>tab.includes(doc.fileType.toLowerCase()))
          })
        }
        if (category!=="empty" && type==="empty") {
          let tab=category.split("-")
          tab=tab.map(elt=>elt.toLowerCase())
          console.log(tab)
          this.documentService.getAllDocuments().subscribe(docs=>{
            this.documents=docs.filter(doc=>tab.includes(doc.theme.toLowerCase()))
          })
        }
        if (category!=="empty" && type!=="empty") {
          let tab1=category.split("-")
          let tab2=type.split("-")
          tab1=tab1.map(elt=>elt.toLowerCase())
          tab2=tab2.map(elt=>elt.toLowerCase())
          this.documentService.getAllDocuments().subscribe(docs=>{
            this.documents=docs.filter(doc=>tab1.includes(doc.theme.toLowerCase()) && tab2.includes(doc.fileType.toLowerCase()))
          })
        }
        
      
       
      }
      else{
        
         this.documentService.getAllDocuments().subscribe(res=>{
          console.log(res)
          this.documents=res}) 
      }
    })
    console.log(this.documents)
    
    
  }
  onDocument(id:number){
    timer(100).subscribe(()=>{
      this.router.navigateByUrl("documents/"+id);
    })
    
  }
 
  

}
