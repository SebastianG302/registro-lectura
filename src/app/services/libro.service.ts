import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Libro } from '../interfaces/libros.interface';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor( private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000';

  getLibros(){
    return this.http.get<Libro[]>(`${this.baseUrl}/libros`);
  }

  getLibroId( id: String ){
    return this.http.get<Libro>(`${this.baseUrl}/libros/${id}`);
  }

   addLibro( libro: Libro){
    return this.http.post<Libro>(`${this.baseUrl}/libros`, libro)
   }
   deleteLibro( id: String ){
    return this.http.delete<Libro>(`${this.baseUrl}/libros/${id}`)
   }
}
