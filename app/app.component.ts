import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'my-app',
  template: `
  <div class = "container-fluid">
  <h1>Meal Tracker</h1>
  <div class = "col-lg-4 col-xs-4 col-sm-4 col-xs-4 new">
  <new-meal
    (newMealSender)="addMeal($event)"
  ></new-meal>
  </div>
  <div class = "col-lg-4 col-xs-4 col-sm-4 col-xs-4 list">
  <meal-list
  [childMealList]="masterMealList"
  (clickSender)="showDetails($event)"
 ></meal-list>
 </div>
   <div class = "col-lg-4 col-xs-4 col-sm-4 col-xs-4 edit">
  <meal-list
  [childMealList]="masterMealList"
  (clickSender)="showDetails($event)"
 ></meal-list>
 <edit-meal
  [childSelectedMeal]="selectedMeal"
  (doneClickedSender)="finishedEditing()"
></edit-meal>
</div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [

  ];

  addMeal(newMealToAdd: Meal) {
    this.masterMealList.push(newMealToAdd);
  }
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
