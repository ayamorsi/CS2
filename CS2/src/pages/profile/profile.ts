import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import {AngularFireDatabase , AngularFireObject , AngularFireList} from  'angularfire2/database';
import { profile } from '../../models/profile';
import{AngularFireAuth} from'angularfire2/auth';
//import {storage , initializeApp} from 'firebase';
//import { FIRBASE_cREDENTIALS } from '../../app/firbase.credentials';
import{Camera, CameraOptions} from '@ionic-native/camera'
import firebase from '../../../node_modules/firebase';
import { Observable } from 'rxjs';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  profData: AngularFireObject<profile>

  profileData: Observable<any>

 fullName;

  constructor(public navCtrl: NavController, public navParams: NavParams , private afDatabase:AngularFireDatabase,
    private toast :ToastController,private afAuth :AngularFireAuth,private camera: Camera ) {

      
      if (!firebase.apps.length) {
        firebase.initializeApp({});
     }

      }

      ionViewWillLoad() {
        this.afAuth.authState.take(1).subscribe(data =>{
          if (data && data.email && data.uid){
            this.toast.create({
              message: ` Welcome to Cs_App, ${data.email}`,
              duration: 3000
            }).present(); 

          this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();


          }
          else{
            this.toast.create({
              message: ' could not find authentication details.',
              duration: 3000
            }).present();
          }
        })
      }
      
      selectPhoto(sourceType:number) {
        const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true,
          sourceType:sourceType,
        }
    
        this.camera.getPicture(options).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error
        });
      }
      
  getDataFromFireBase(){

  this.afAuth.authState.take(1).subscribe(data =>{
    if (data && data.email && data.uid){
    this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
    this.profData = this.afDatabase.object(`profile/${data.uid}`);
    }
    
  })
  }


}
