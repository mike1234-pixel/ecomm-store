import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  products: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.products = firestore.collection('products').valueChanges() // returns Observable
    this.products.subscribe(res=>console.log(res)) //subscribe to read as json
  }



 }
