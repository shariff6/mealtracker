import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="meal.calories < 500" type="checkbox" checked (click)="toggle()"/>
    <input *ngIf="meal.calories > 500" type="checkbox" (click)="toggle()"/>
    <label>{{ task.description }}</label>
  </div>
  `
})
export class MealComponent {
  @Input() meal: Meal;
  toggle(selectedCalories: number) {
    this.meal.calories = selectedCalories;
  }
}
