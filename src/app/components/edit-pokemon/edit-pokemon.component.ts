import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
pokemonForm: Pokemon;
isLoading: boolean;
  constructor(private pokemonService: PokemonService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pokemonService.getPokemonByID(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.pokemonForm = data;
      this.isLoading = false;
    });
  }
  onSubmit() {
    this.pokemonService.edit(this.pokemonForm).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }
}
