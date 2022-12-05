export interface Libros {
    libros: Libro[];
}

export interface Libro {
    id:                 string;
    nombre:             string;
    autor:              string;
    calificacion:       number;
    fecha_inicio:       string;
    fecha_fin:          string;
    personaje_favorito: string;
    frases_destacadas:  string;
    descripcion: string
}
