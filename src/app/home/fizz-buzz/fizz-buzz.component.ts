import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.prueba();
  }

  prueba() {
    alert('Recorre 30 números para llegar a la meta');
    for (let i = 1; i <= 30; i++) {
      if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
        alert("FizzBuzz");
      } else if (i % 3 == 0) {
        console.log("Fizz");
        alert("Fizz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
        alert("Buzz");
      } else {
        console.log(i);
        alert(i);
      }
    }
  }

}
