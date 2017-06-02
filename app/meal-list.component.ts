import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <h1 class = "myMeals">My Meals</h1>
  <h1 class = "myEdits">Edit</h1>
  <div class = "option">
  <select (change)="onChange($event.target.value)">
  <option value="lowCalorie">lowCalorie</option>
  <option value="highCalorie">HighCalorie</option>

</select>
</div>
    <div *ngFor="let currentMeal of childMealList | calories:selectedCalories; let i = index">
    <h3>{{ currentMeal.name }}</h3>
      <div class = "es">
      <p>{{currentMeal.description}}</p>
      <p>{{currentMeal.calories}}</p>
      <button class = "btn btn-info" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      <button class = "btn btn-wa" (click)="removeButtonHasBeenClicked(i)(currentMeal)">Remove</button>
      </div>
      </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "lowCalorie";
onChange(optionFromMenu) {
  this.selectedCalories = optionFromMenu;
  console.log(this.selectedCalories);
}
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  removeButtonHasBeenClicked(itemToRemove) {
    this.childMealList.splice(itemToRemove,1);
}
}
