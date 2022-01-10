import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/order';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  id: string
  //Get orders saved in localstorage
  currentOrders = JSON.parse(localStorage.getItem("orders"));
  idOrder: Order;
  
  ngOnInit() {
    //Get id from route parameters
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.idOrder = this.currentOrders.find(id => id = this.id);
  }

  //Fucntion to navigate back to home page
  goHome(){
    this.router.navigate([''])
  }

}
