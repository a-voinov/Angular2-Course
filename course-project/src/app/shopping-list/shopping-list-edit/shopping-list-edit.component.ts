import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false})
  nameInput: ElementRef;

  @ViewChild('amountInput', {static: false})
  amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = {
      name : this.nameInput.nativeElement.value,
      amount : this.amountInput.nativeElement.value
    } as Ingredient;
    
    this.shoppingListService.addIngredient(ingredient);
  }

}
