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
export class GradesPage  {
 
  
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradesPage');
  }
 
  
}

