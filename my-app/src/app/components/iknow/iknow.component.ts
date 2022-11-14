import { Component, OnInit } from '@angular/core';
import { IknowinfoService } from 'src/app/Services/iknowinfo/iknowinfo.service';

@Component({
  selector: 'app-iknow',
  templateUrl: './iknow.component.html',
  styleUrls: ['./iknow.component.css']
})
export class IknowComponent implements OnInit {

  constructor() { 
   
  }
  

  ngOnInit(): void {
    
  }

}

 console.log(IknowinfoService.name)

