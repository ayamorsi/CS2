import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimetablePage } from '../timetable/timetable';
import {AngularFireDatabase} from  'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth'; 
import { courses } from '../../models/courses';
import { AbstractControl} from '@angular/forms';
/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  Courses = {} as courses;
  //subject0: AbstractControl;
  public form = [
    { val: 'subject0', isChecked: true },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams ,private afAuth : AngularFireAuth ,private afDatabase:AngularFireDatabase, ) {
  }
  courses(){
    this.afAuth.authState.take(1).subscribe(auth =>{
    this.afDatabase.object(`courses/${auth.uid}`).set(this.Courses)
    .then(()=> this.navCtrl.push(TimetablePage))
    })
  }
  
  
}
