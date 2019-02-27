import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { courses } from '../../models/courses';
import { TimetablePage} from '../timetable/timetable';
import firebase from '../../../node_modules/firebase';
import { Observable } from 'rxjs';
import { AngularFireObject , AngularFireList} from  'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage implements OnInit {
  profData: AngularFireList<courses>
  profileData: Observable<any>
  subjectarr: any [];
  isChecked: any;
  selectedArray : any [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    private afAuth : AngularFireAuth ,
    private afDatabase:AngularFireDatabase
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
   }
  }

  ngOnInit(): void {
    this.subjectarr = [
      { val: 'تفاضل وتكامل 2',       CreditHours: '3' ,  Code:  '221ر', isChecked: false },
      { val: 'معادلات تفاضليه عاديه', CreditHours: '3' ,  Code:  '221ر', isChecked: false },
      { val: 'نظريه احصائيه',        CreditHours: '3' ,  Code:  '221ر', isChecked: false },
      { val: 'أساسيات برمجد هيكلية', CreditHours: '3' ,  Code:  '221ر', isChecked: false },
      { val: 'نظم قواعد بيانات',     CreditHours: '3' ,  Code:  '221ر', isChecked: false },
      { val: 'بناء حاسب',            CreditHours: '3' ,  Code:  '221ر', isChecked: false },
      { val: 'تفاضل وتكامل 2',       CreditHours: '3' ,  Code:  '221ر', isChecked: false }, 
      { val: 'تفاضل وتكامل 2',       CreditHours: '3' ,  Code:  '221ر', isChecked: false }, 
      { val: 'تفاضل وتكامل 2',       CreditHours: '3' ,  Code:  '221ر', isChecked: false }, 
    ];
    
    this.selectedArray = [];
  }
  
  /*ionViewDidLoad() {
    console.log('ionViewDidLoad GradesPage');
  }*/


  Courses(){

    for(let i = 0; i < this.subjectarr.length; i++){
       if (this.subjectarr[i].isChecked == true){
        this.selectedArray.push(this.subjectarr[i]);
    }
    for (let j =0; j < this.selectedArray.length; j++){
      if (this.selectedArray.length > 5) {
        this.subjectarr[i].isChecked == false 
      }
    }
    
  }
      this.afAuth.authState.take(1).subscribe(auth =>{
        this.afDatabase.list(`courses/${auth.uid}`).push(this.selectedArray)
        .then(()=> this.navCtrl.push(TimetablePage))
         })
  }
}
