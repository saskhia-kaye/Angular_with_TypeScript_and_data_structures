import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css']
})
export class PaintingListComponent {
  paintingItems: string[] = [
    'The Kiss',
    'Girl with a Pearl Earring',
    'Las Meninas'
  ];

  newPainting: string = '';

  addPainting() {
    if (this.newPainting.trim()) {
      this.paintingItems.push(this.newPainting);
      this.resetInputs();
    }
  }

  deletePainting(painting: string) {
    this.paintingItems = this.paintingItems.filter(item => item !== painting);
  }

  resetInputs() {
    this.newPainting = '';
  }
}
