import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
  coursData: AngularFireList<OnInit>
  coursesData: Observable<any>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afDatabase:AngularFireDatabase,
    private toast :ToastController,
    private afAuth :AngularFireAuth,
    ) {
      if (!firebase.apps.length) {
        firebase.initializeApp({});
     }
  }
   ngOnInit(): void {
     this.getDataFromFireBase();
   }

  getDataFromFireBase(){
    this.afAuth.authState.take(1).subscribe(data =>{
    if (data && data.email && data.uid){console.log(data);
      this.coursesData = this.afDatabase.list(`courses/${data.uid}`).valueChanges();
      this.coursData = this.afDatabase.list(`courses/${data.uid}`);
     } 
    })
    
    console.log('coursesData', this.coursesData);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

}
