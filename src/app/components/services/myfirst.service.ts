import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MyfirstService {
  constructor() {
    this.init();
  }
  
  messages: any[] = [];

  init():void{
    this.insert({
      name: "alibu",
      email: "jsbjsb",
      message: "hello World"
    });
    this.insert({
      name: "alibu2",
      email: "jsbjsb",
      message: "hello World"
    });
    this.insert({
      name: "alibu3",
      email: "jsbjsb",
      message: "hello World"
    });
  }

  insert(message: {name: string, email: string, message:string}):void {
    this.messages.push(message);
  }

  getAllMessage(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
