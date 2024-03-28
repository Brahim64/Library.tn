import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../service/document.service';
import { Categeory } from '../shared/model/Category';
import { Type } from '../shared/model/Type';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  types:Type[]=[];
  categories:Categeory[]=[];
  constructor(private documentService:DocumentService){}
  ngOnInit(): void {
    this.categories=this.documentService.getDocumentsThemes();
    this.types=this.documentService.getDocumentsTypes();
  }

}
