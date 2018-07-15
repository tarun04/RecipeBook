import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Biryani',
            'Hyderabadi',
            'https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg',
            [
                new Ingredient('Rice', 2),
                new Ingredient('Onions', 3)
            ]
        ),
        new Recipe(
            'Pizza',
            'Italian',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pizza-1516720983.jpg?resize=768:*',
            [
                new Ingredient('Pineapple', 2),
                new Ingredient('Chicken', 1)
            ]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppinglistService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients);
    }
}
