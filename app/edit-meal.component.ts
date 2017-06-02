import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
      <label>Edit Meal Name</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.name">
        <label>Edit Meal Description</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.description">
        <label>Edit Amount of calories</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
        <button class="btn btn-info"(click)="doneClicked()">Done</button>
      </div>

    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
