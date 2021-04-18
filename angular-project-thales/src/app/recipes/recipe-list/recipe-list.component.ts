import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Macarronada','Macarrão e água', 'https://img.cybercook.com.br/receitas/33/macarronada-4-623x350.jpeg'
    ),
    new Recipe(
      'Macarronada','Macarrão e água', 'https://img.cybercook.com.br/receitas/33/macarronada-4-623x350.jpeg'
    ),
    new Recipe(
      'Macarronada','Macarrão e água', 'https://img.cybercook.com.br/receitas/33/macarronada-4-623x350.jpeg'
    )

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
