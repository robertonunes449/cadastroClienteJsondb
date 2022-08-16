import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Colaboradores } from 'src/app/Models/Colaboradores/colaborador.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorServiceService {

  baseUrl: String = environment.baseUrl;

  constructor (
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) {
   }

   findAll():Observable<Colaboradores[]> {
    const url = `${this.baseUrl}/colaborador`
    return this.http.get<Colaboradores[]>(url)
  }

  findById(id: String): Observable<Colaboradores> {
    const url = `${this.baseUrl}/colaborador/${id}`
    return this.http.get<Colaboradores>(url)
  }

  create(col: Colaboradores): Observable<Colaboradores>{
    const url = `${this.baseUrl}/colaborador/`
    return this.http.post<Colaboradores>(url, col);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/colaborador/${id}`
    return this.http.delete<void>(url)
  }

  update(col: Colaboradores):Observable<void> {
    const url = `${this.baseUrl}/colaborador/${col.id}`
    return this.http.put<void>(url, col)
  }

  mensagem(str: String): void {
    this.snackBar.open(`${str}`, 'OK', {duration: 1000})
  }

}
