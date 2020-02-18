import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
pokemonForm: Pokemon;
isLoading: boolean;

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit(): void {
    this.pokemonForm = new Pokemon();
  }
  onSubmit() {
    this.pokemonService.add(this.pokemonForm).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }
}
