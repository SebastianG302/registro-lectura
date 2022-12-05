import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Libro } from 'src/app/interfaces/libros.interface';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  error: boolean = false;

  constructor(private libroService: LibroService,
    private route: Router,
    private fb: FormBuilder) { }

    miFormulario: FormGroup = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      autor: ['', [Validators.required, Validators.maxLength(200)]],
      calificacion: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      fecha_fin: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      frases_destacadas: ['', [Validators.required, Validators.maxLength(300)]],
      personaje_favorito: ['', [Validators.required, Validators.maxLength(200)]],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]]
    })

  ngOnInit(): void {

  }

  save(miFormulario: any){

    console.log(miFormulario.controls);
    let libro: Libro = {
      id: '',
      nombre: miFormulario.controls.nombre.value,
      autor: miFormulario.controls.autor.value,
      calificacion: miFormulario.controls.calificacion.value,
      fecha_inicio: miFormulario.controls.fecha_inicio.value,
      fecha_fin: miFormulario.controls.fecha_fin.value,
      personaje_favorito: miFormulario.controls.personaje_favorito.value,
      frases_destacadas: miFormulario.controls.frases_destacadas.value,
      descripcion: miFormulario.controls.descripcion.value
    }

    if (miFormulario.status === "INVALID") {
      console.log('Error');
      this.error = true;
      return
    }
    
    
    this.libroService.addLibro(libro)
    .subscribe(libro => {
      this.route.navigate(['/ver', libro.id])
    })
  }
}
