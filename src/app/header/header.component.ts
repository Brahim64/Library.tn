import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private route:ActivatedRoute){}

  @Input() adminSession:boolean=true;
  @Input() searchBar:boolean=false;
  
  //rendered:boolean=this.searchBar;

  ngOnInit(): void {
  }
  

  

}
