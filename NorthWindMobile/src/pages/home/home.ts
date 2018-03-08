import { NavController } from 'ionic-angular';
import { Component , ViewChild} from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result:any=[];
  data:Observable<any>;
  constructor(public navCtrl: NavController,public http:Http) {
  }
    getData(){
     console.log("aa");
      var url='https://jsonplaceholder.typicode.com/posts/1';
      this.data=this.http.get(url);
      this.data.subscribe(data=> {
        this.result=data;
      });
    
  }
 
}
