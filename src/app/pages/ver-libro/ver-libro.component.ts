import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Libro } from 'src/app/interfaces/libros.interface';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-ver-libro',
  templateUrl: './ver-libro.component.html',
  styleUrls: ['./ver-libro.component.css']
})
export class VerLibroComponent implements OnInit {

  libro!: Libro; 

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.libroService.getLibroId(id))
    )
    .subscribe(libro => this.libro = libro)
  }

  delete(){
    this.libroService.deleteLibro(this.libro.id)
    .subscribe(resp => {
      this.router.navigate(['/'])
    })
  }

}
