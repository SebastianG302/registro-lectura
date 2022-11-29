import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libros.interface';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(libros => {
      this.libros = libros
      console.log(this.libros);
    })
  }
}
