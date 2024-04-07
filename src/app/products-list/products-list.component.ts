import { Component, Inject, OnInit, inject } from '@angular/core';
import { document } from '../shared/model/document';
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
  documents:document[];
  BaseUrl=this.baseUrl;
  
  
  
  ngOnInit():void {
    //this.documentService.getAllDocuments().subscribe(res=>{this.documents=res})
    this.route.paramMap.subscribe(res=>{
      if (res.get('param1')) {
        this.documentService.getAllDocuments().subscribe(docs=>{
          this.documents=docs.filter(doc=>doc.title.toLowerCase().includes(res.get('param1').toLowerCase()))
        }) 
      } 
      else{
        
         this.documentService.getAllDocuments().subscribe(res=>{this.documents=res}) 
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
