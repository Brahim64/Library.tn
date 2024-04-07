import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../service/document.service';
import { Categeory } from '../shared/model/Category';
import { Type } from '../shared/model/Type';
import { map } from 'rxjs';
import { document } from '../shared/model/document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  


  types:Type[]=[];
  categories:Categeory[]=[];
  radios:{checked:boolean}[]=[]
  constructor(private documentService:DocumentService,private router:Router){
  }
  ngOnInit(): void {
    this.documentService.getAllDocuments().subscribe(res=>{
      this.categories=this.getCategories(res)
      this.types=this.getTypes(res);
      //this.radios.length=this.types.length
    })
  }
  
  getCategories(docs:document[]):Categeory[]{
    let themes:string[]=[];
    let set_themes:Set<string>;
    let categ:Categeory[]=[];
    
    docs.forEach(doc=>{
      themes.push(doc.theme);
    })
    set_themes=new Set(themes)
    set_themes.forEach(elt => {
      categ.push({name:elt,count:themes.filter(theme=>theme==elt).length,checked:false})
    });
    return categ;
  }
  getTypes(docs:document[]):Type[]{
    let types:string[]=[];
    let set_types:Set<string>;
    let final:Type[]=[];
    docs.forEach(doc=>{
      types.push(doc.fileType);
    })
    set_types=new Set(types)
    set_types.forEach(elt => {
      final.push({name:elt,count:types.filter(type=>type==elt).length,checked:false})
    });
    return final;
  }
  onSearch(){
    
    /* this.types.forEach(elt=>{
      console.log(elt.checked)
    }) */
  }
  onChange(event:any){
    console.log(event.target.id)
    this.router.navigateByUrl("documents")
  }
  

}
