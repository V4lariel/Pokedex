import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
pokemons: Pokemon [];
apiURL = 'http://localhost:3000/pokemon'
  constructor(private http: HttpClient) { }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAllPokemons(): Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(this.apiURL).pipe(
    retry(1),
    catchError(this.handleError)
  );
  }
  getPokemonByID(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiURL+'/'+ id).pipe(retry(1), catchError(this.handleError))
  }
  add(pokemon: Pokemon): Observable<Pokemon> {
  return this.http.post<Pokemon>(this.apiURL, pokemon).pipe(retry(1), catchError(this.handleError))
  }
  edit(pokemonToEdit: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(this.apiURL+'/'+pokemonToEdit.id, pokemonToEdit).pipe(retry(1), catchError(this.handleError)
    );
  }
  deletePokemon(id: number): Observable<Pokemon>  {
    return this.http.delete<Pokemon>(this.apiURL+'/'+ id).pipe(retry(1), catchError(this.handleError)
    );
  }
}
