import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  isLoading: boolean;
  pokemons: Pokemon[];
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.pokemonService.getAllPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
      this.isLoading = false;
    })
  }

  deletePokemon(id: number) {
    this.pokemonService.deletePokemon(id).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }
}
