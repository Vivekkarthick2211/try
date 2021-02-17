import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  collectionName="VIV";
  constructor(private firestore: AngularFirestore) { }

  create_sta(record) { 
    return this.firestore.collection(this.collectionName).add(record);
  }
  read_students(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

}
