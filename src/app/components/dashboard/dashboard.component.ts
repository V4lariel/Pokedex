import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
isLoading: boolean;
pokemons: Pokemon[];
faEdit = faEdit;
faTrash = faTrash;
  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pokemonService.getAllPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
      this.isLoading = false;
    })
  }

}
