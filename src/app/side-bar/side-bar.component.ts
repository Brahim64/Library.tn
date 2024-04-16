import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../service/document.service';
import { Categeory } from '../shared/model/Category';
import { Type } from '../shared/model/Type';
import { map } from 'rxjs';
import { Document } from '../shared/model/document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  typeParm:string="";
  categoryParam:string="";
  disabled:boolean=true;

  hidespinner:boolean=false;


  types:Type[]=[];
  categories:Categeory[]=[];
  radios:{checked:boolean}[]=[]
  constructor(private documentService:DocumentService,private router:Router){
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.hidespinner=true;
    }, 1000);
    this.documentService.getAllDocuments().subscribe(res=>{
      this.categories=this.getCategories(res)
      this.types=this.getTypes(res);
      //this.radios.length=this.types.length
    })
  }
  
  getCategories(docs:Document[]):Categeory[]{
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
  getTypes(docs:Document[]):Type[]{
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
  
  onChange(event:any){
    console.log(event.target)
    if (event.target.checked) {
      if (event.target.name=="category") {
        if (this.categoryParam=="") {
          this.categoryParam=event.target.id;
        }else{
          this.categoryParam+="-"+event.target.id
        }
        console.log(this.categoryParam)
      }
      if (event.target.name=="type") {
        if (this.typeParm=="") {
          this.typeParm=event.target.id;
        }else{
          this.typeParm+="-"+event.target.id
        }
        console.log(this.typeParm)
        
      }
    }
    if (!event.target.checked) {
      if (event.target.name=="type") {
        let typeTable=new Set(this.typeParm.split("-"))
        typeTable.delete(event.target.id)
        let a=Array.from(typeTable)
        this.typeParm=a.join("-")
        console.log(this.typeParm)
      }
      if (event.target.name=="category") {
        let categTable=new Set(this.categoryParam.split("-"))
        categTable.delete(event.target.id)
        let a=Array.from(categTable)
        this.categoryParam=a.join("-")
        console.log(this.categoryParam)
      }
    }
    this.disabled=this.typeParm=="" && this.categoryParam=="";
    //const typesInp=document.querySelectorAll("typeInp");
  }
  onSearch(){
    let newLink="";
    if (this.categoryParam!="" && this.typeParm!="") {
      newLink=this.typeParm+"/"+this.categoryParam;
    }
    else if (this.typeParm!="") {
      newLink=this.typeParm+"/empty";
    }
    else if(this.categoryParam!=""){
      newLink="empty/"+this.categoryParam;
    }
    else{
      newLink="empty/empty";
    }
    this.router.navigateByUrl("documents/"+newLink)
  }
  

}
