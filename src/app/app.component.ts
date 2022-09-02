import { Component } from '@angular/core';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']
})  
export class AppComponent {  
  public value1: number = 10121212;  
  public array1: Array<number> = [10, 22, 14];  
  public dt1: Date = new Date();  
  public val: string = "";  
  public status: boolean = true;  
  
  public returnString(): string {  
      return "String return from function";  
  }   
  public showAlert() : void {  
    console.log('You clicked on the button...');  
    alert("Click Event Fired...");  
  }  
    public value: string = "This is alert popup message";  
    public onSignup(data:any):void{  
      let strMessage:string ="Thanks for Signup " + data.name + ". ";  
      strMessage += "Email id " + data.email + " has been registered successfully.";  
      alert(strMessage);  
    }  
}  