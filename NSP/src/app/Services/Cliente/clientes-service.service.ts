import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/Models/Clientes/cliente.model';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  private ClienteCollection: AngularFirestoreCollection<Clientes> = this.afs.collection('clientes');

  constructor(private afs: AngularFirestore,
    private http: HttpClient) { }

  getAll(): Observable<Clientes[]>{
    return this.ClienteCollection.valueChanges()
    
   }

   criar(c: Clientes){
    c.id = this.afs.createId();
    return this.ClienteCollection.doc(c.id).set(c);
    //return this.ColaboradorCollection.add(c);
   } 

   atualizar(c: Clientes) {
    return this.ClienteCollection.doc(c.id).update(c);
   }

   deletar(c: Clientes) {
    return this.ClienteCollection.doc(c.id).delete();
   }

   searchByName(nome: string): Observable<Clientes[]>{
    return this.afs.collection<Clientes>('Clientes',
    ref => ref.orderBy('nome').startAt(nome).endAt(nome+"\f8ff"))
    .valueChanges();
   }
}
