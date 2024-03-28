import { Component, OnInit } from '@angular/core';
import { document } from '../shared/model/document';
import { DocumentService } from '../service/document.service';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from '../service/messenger.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  documents:document[];
  
  constructor(private documentService :DocumentService,private route:ActivatedRoute,
                private messengerService:MessengerService){}
  
  ngOnInit():void {
    
    this.route.paramMap.subscribe(res=>{
      if (res.get('param1')) {
        this.documents=this.documentService.getAllDocumentsByTitle(res.get('param1'));
      }
      else{
        this.documents=this.documentService.getAllDocuments();
      }
    })
    
    
  }
  

}
