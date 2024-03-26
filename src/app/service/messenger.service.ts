import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  message:string="";
  constructor() { }

  getMessage(){
    return this.message;
  }
  sendMessage(newMsg:string):void{
    this.message=newMsg;
  }
}
