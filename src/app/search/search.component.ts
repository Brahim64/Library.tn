import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessengerService } from '../service/messenger.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Input() adminSession1:boolean=true;

  searchTerm:string="";
  constructor(private route:ActivatedRoute,private messengerService:MessengerService,private router:Router){}
  ngOnInit(): void {
    
        this.searchTerm=this.messengerService.getMessage();
      
    
  }
  onSearch():void{
    this.router.navigateByUrl('/search/'+this.searchTerm)
  }
  

}
