import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from "../../order";
import { orders } from 'src/assets/data/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newOrder = new Order();

  //Function to create new order 
  submitOrder(){
    //Create new id for order
    this.newOrder.id = (Math.random() + 1).toString(36).substring(7);
    
    //Check if customer name has been given
    this.checkName(this.newOrder.id);
    
    //Save Orders to localstorage
    orders.push(this.newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    //Navigate to Order Details
    this.router.navigate(['/order-details', this.newOrder.id])
  }

  //Funtion to check if name hase been given otherwise set a default
  checkName(id) {
    if(!this.newOrder.name){
      this.newOrder.name = "CUSTOMER"+id;
    }
  }

}
