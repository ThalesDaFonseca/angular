import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient ( 'molho' , 1),
    new Ingredient ( 'Macarrão' , 20 ),
    new Ingredient ( 'Queijo Ralado' , 3)  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}