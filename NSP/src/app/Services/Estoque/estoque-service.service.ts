import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Estoque } from 'src/app/Models/Estoque/estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueServiceService {
  
  private estoqueCollection: AngularFirestoreCollection<Estoque> = this.afs.collection('estoque');

  constructor (private afs: AngularFirestore) {
   }

   getAll(): Observable<Estoque[]>{
    return this.estoqueCollection.valueChanges();
   }

   criar(e: Estoque){
    e.id = this.afs.createId();
    return this.estoqueCollection.doc(e.id).set(e);
    //return this.ColaboradorCollection.add(c);
   } 

   atualizar(e: Estoque) {
    return this.estoqueCollection.doc(e.id).update(e);
   }

   deletar(e: Estoque) {
    return this.estoqueCollection.doc(e.id).delete();
   }

}
