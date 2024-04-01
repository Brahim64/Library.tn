import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../service/document.service';
import { Categeory } from '../shared/model/Category';
import { Type } from '../shared/model/Type';
import { map } from 'rxjs';
import { document } from '../shared/model/document';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  
  documents:document[]=[]
  types:Type[]=[];
  categories:Categeory[]=[];
  constructor(private documentService:DocumentService){}
  ngOnInit(): void {
    this.documentService.getAllDocuments().subscribe(res=>{
      this.documents=res;
      this.categories=this.getCategories();
      this.types=this.getTypes();
    })
  }
  
  getCategories():Categeory[]{
    let themes:string[]=[];
    let set_themes:Set<string>;
    let categ:Categeory[]=[];
    
    this.documents.forEach(doc=>{
      themes.push(doc.theme);
    })
    set_themes=new Set(themes)
    set_themes.forEach(elt => {
      categ.push({name:elt,count:themes.filter(theme=>theme==elt).length})
    });
    return categ;
  }
  getTypes():Type[]{
    let types:string[]=[];
    let set_types:Set<string>;
    let final:Type[]=[];
    this.documents.forEach(doc=>{
      types.push(doc.fileType);
    })
    set_types=new Set(types)
    set_types.forEach(elt => {
      final.push({name:elt,count:types.filter(type=>type==elt).length})
    });
    return final;
  }

}
