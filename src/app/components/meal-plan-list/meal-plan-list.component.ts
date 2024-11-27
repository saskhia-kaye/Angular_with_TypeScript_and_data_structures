import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css']
})
export class MealPlanListComponent {
  mealItems: string[] = [
    'Breakfast: Fried Rice',
    'Lunch: Caldereta with Rice',
    'Dinner: Sinigang with Rice',
    'Snack: Noodles'
  ];

  newMeal: string = '';

  addMeal() {
    if (this.newMeal.trim()) {
      this.mealItems.push(this.newMeal);
      this.resetInputs();
    }
  }

  deleteMeal(meal: string) {
    this.mealItems = this.mealItems.filter(item => item !== meal);
  }

  resetInputs() {
    this.newMeal = '';
  }
}
