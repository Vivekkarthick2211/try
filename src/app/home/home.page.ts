import { Component } from '@angular/core';

//import { Router } from '@angular/router';
import { FireService } from '../fire.service';
import { sample } from '../serve';

   interface kart{
    name:any;
   
  } 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
   name:any;
  constructor(private firebase:FireService,private ssam:sample) {
  
  }
  Callserve() {
      this.ssam.Meth(this.name);

      
   // let record = {};
    //record['name'] = this.name;
  
      
    
/*     this.firebase.create_sta(record).then(resp => {
      // this.studentForm.reset();
      console.log(record);
    })
      .catch(error => {
        console.log(error);
      });
  } */

}}




