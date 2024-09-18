import { Component, inject } from '@angular/core';
import { MyfirstService } from '../services/myfirst.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  
  name: string = "default name";
  email: string = "default email";
  message: string = "default message";
  isSubmitted: boolean = false;
  visualChange: string = 'table';
  
  messages: Array<any> = [];
  
  // private service: MyfirstService = inject(MyfirstService); //property injection

    constructor(private service: MyfirstService){ //constructor injection
    // constructor(){ 
      this.messages = this.service.getAllMessage();
      this.isSubmitted = this.messages.length > 0;
    }

    onSubmit():void {
      this.isSubmitted = true;
      // this.messages.push({
      //   'name':this.name,
      //   'email':this.email,
      //   'message':this.message
      // });
      this.service.insert({
          'name':this.name,
          'email':this.email,
          'message':this.message
        });
      console.log(this.messages);
    }

    onDeleteButton(index: number){
      // this.messages.splice(index, 1);
      this.service.deleteMessage(index);
      // console.log(index);
    }

    deleteData(index: number):void{
      this.messages.splice(index, 1);
    }

}
