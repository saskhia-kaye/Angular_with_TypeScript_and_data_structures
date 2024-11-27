import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {

  items: { name: string; price: number; quantity: number }[] = [
    { name: 'iPad', price: 12899.99, quantity: 5 }, // Example  item
    { name: 'iPhone XR', price: 13799.99, quantity: 3 }  // Example  item
  ];

  newItemName: string = ""; 
  newItemPrice: number = 0; 
  newItemQuantity: number = 1; 
  addItem() {
    if (this.newItemName.trim() && this.newItemPrice >= 0 && this.newItemQuantity > 0) { // Validate your inputs
      this.items.push({ 
        name: this.newItemName, 
        price: this.newItemPrice, 
        quantity: this.newItemQuantity 
      }); // Add new item to the list
      this.newItemName = ""; 
      this.newItemPrice = 0; 
      this.newItemQuantity = 1; 
    }
  }

  deleteItem(item: { name: string; price: number; quantity: number }) {
    this.items = this.items.filter(i => i.name !== item.name); // Remove item from the list
  }
}
