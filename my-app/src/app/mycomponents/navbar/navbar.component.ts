import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

public drop=false;

mymenu(){
  if(this.drop==false){
    this.drop=true;
    document.getElementById("navbar")?.classList.add("afternav")
  }
  else{
    this.drop=false;
    document.getElementById("navbar")?.classList.remove("afternav")

  }
}


}
