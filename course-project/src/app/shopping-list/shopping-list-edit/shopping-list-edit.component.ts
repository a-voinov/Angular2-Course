import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: false})
  nameInput: ElementRef;

  @ViewChild('amountInput', {static: false})
  amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = {
      name : this.nameInput.nativeElement.value,
      amount : this.amountInput.nativeElement.value
    } as Ingredient;
    
    this.ingredientAdded.emit(ingredient);
  }

}
