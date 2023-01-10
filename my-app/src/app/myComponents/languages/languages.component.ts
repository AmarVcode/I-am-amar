import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

public info:string="";

showinfo(p:string){
  this.info=p
let div = document.getElementById("fixed");
let para:any=document.getElementById("para");
para.innerText=this.info
if(div?.classList.contains("afterfixed")){
div.classList.remove("afterfixed")
}
else{
  div?.classList.add("afterfixed")
}
}

nshowinfo(){
document.getElementById("fixed")?.classList.remove("afterfixed")

}

}
