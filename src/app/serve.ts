import { FireService } from "./fire.service";
import { HomePage} from '../app/home/home.page';
//import { NavParams } from '@ionic/angular';
 export class sample{
    name:string;
  private fbs:FireService; private hm:HomePage
 constructor(
 ) { 
   
  }
  Meth(name){
    
 let record = {};
 record['name'] = name; 
console.log("Called"+name);
 
 console.log("rec"+record['name']);   
this.fbs.create_sta(record).then(resp => {
 
  console.log(record);
})
  .catch(error => {
    console.log(error);
  });
}
}
 
