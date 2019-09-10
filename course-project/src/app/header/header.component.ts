import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  @Output()
  onTabSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipesClick() {
    this.onTabSelected.emit("recipes");
  }

  onShoppingListClick() {
    this.onTabSelected.emit("shopping_list");
  }

}
