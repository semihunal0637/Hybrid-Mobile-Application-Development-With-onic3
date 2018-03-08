import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ProductService } from '../../providers/product.service';
import { Product } from '../../entities/product';
import {Observable } from 'rxjs/Observable';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductService]
})
export class ProductPage {
  ad:Product[];
 username:string;
 password:string;
 //result:any=[];
 //data:Observable<any>;
  @ViewChild('username') uname;
  
  @ViewChild('password') password1;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public navParams: NavParams,
    public productService:ProductService,
    public alertCtrl:AlertController) {
  
  
}
getDataa(){
  console.log("aa");
  var url='http://localhost/deneme3.php';
  this.data=this.http.get(url);
  this.data.subscribe(data=> {
    this.result=data;
//console.log('dikkat')
 //   console.log(this.result.adsoyad); 
  // console.log(this.result.map['adsoyad']);
  });
  
  console.log('veri çekildi.BASŞLA');
 // console.log(this.data);
  console.log(this.result);
 // console.log(this.data[1]);
  console.log('veri çekildi bitti');
  
}
post(){
  console.log("girdi");
  var url='http://localhost/uyelik/index.php/';
  let postData=new FormData();
  postData.append('kullaniciadi','semihdasdsad');
  postData.append('adsoyad', 'melihdsa');
  postData.append('sifre', 'sdadasdsad');
  postData.append('posta', 'dasdasd');
  postData.append('telefon', '1234567');
  this.data=this.http.post(url,postData);
  this.data.subscribe(data=>{
    console.log(data)
  });
}
singIn(){
  console.log(this.uname.value, this.password1.value);
  if(this.uname.value=="admin" && this.password1.value =="admin")
  {
    let alert=this.alertCtrl.create({
      title:"Login Successful",
      subTitle:"You are logged in",
      buttons:['OK']
    })
    alert.present();
  }
  if(this.uname.value=="" || this.password1.value=="")
  {
    let alert=this.alertCtrl.create({
      title:"Dikkat",
      subTitle:"Kullanıcı Adınız veya Şifreniz Eksik"

    })
   alert.present();
  }
}
  products:Product[];
  result:any=[];
  data:Observable<any>;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.getProducts();
    this.post();
    this.getDataa();
   /* 
   let headers=new Headers();
   headers.append('kullaniciadi','istkullanici');
   headers.append('adsoyad','istSemih');
   headers.append('sifre','sadsadsad');
   headers.append('posta','isteposta');
   headers.append('telefon','987123456');
   
   let body = {
     status:1
   };
   this.http.post('http://localhost/uyelik/index.php/',JSON.stringify(body),{headers:headers})
  .map(res=>res.json())
  .subscribe(data=>{
   // console.log(data);
  });
  */
  }
  getData(){
    console.log("aa");
     var url='https://jsonplaceholder.typicode.com/posts/1';
     this.data=this.http.get(url);
     this.data.subscribe(data=> {
       this.result=data;
     });
  }
  

  /*
    postData(){
    var url='http://localhost/uyelik/index.php/';
    let postData=new FormData();
    postData.append('kullaniciadi','istkullanici');
    postData.append('adsoyad','istSemih');
    postData.append('sifre','sadsadsad');
    postData.append('posta','isteposta');
    postData.append('telefon','987123456');
    //=this.http.post(url,postData);

  }*/
  getProducts(){
    this.productService.getProducts().subscribe(p=>{
    this.products=p
    console.log(this.products);//BURADA NESNELER VERİLİYOR.
    this.ad=this.products;
      
    })
  }

}