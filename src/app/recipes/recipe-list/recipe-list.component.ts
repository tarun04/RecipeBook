import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biryani', 'Hyderabadi', 'https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg'),
    new Recipe('Pizza', 'Italian', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pizza-1516720983.jpg?resize=768:*')
  ];

  constructor() { }

  ngOnInit() {
  }

}
