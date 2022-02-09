import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
  <div class = "home-page2">
    <h3 class = "home"> This is the PROJECT 2's HOME sweet HOME page </h3>  
    <p class = "home">
    
    <p> HELLO and WECLOME :) 
    </p>

    <p>
    Cupcake liquorice danish jelly beans sesame snaps sugar plum muffin macaroon marzipan.
    Pastry jelly-o jujubes carrot cake sugar plum I love tiramisu candy. 
    Danish chocolate bar chocolate cake I love jelly beans.
    </p>
    <p>

    Biscuit toffee sugar plum wafer caramels marzipan biscuit marshmallow. Dessert candy canes muffin gummi bears apple pie chupa chups pudding soufflé. 
    Chocolate bar sweet gummies ice cream ice cream chocolate cake. Bear claw pudding cotton candy dessert marzipan fruitcake dragée cheesecake.
    Caramels candy sweet toffee toffee. Cupcake pastry dragée cookie brownie. Jujubes cheesecake icing I love fruitcake wafer gummi bears. 
    Cupcake liquorice danish jelly beans sesame snaps sugar plum muffin macaroon marzipan.
    Pastry jelly-o jujubes carrot cake sugar plum I love tiramisu candy. 
    Danish chocolate bar chocolate cake I love jelly beans. Carrot cake I love toffee bear claw topping tart dessert candy lollipop.
    </p>
  </div>
  `,
  styles: [
    `
    .home-page2 {
      width: 50%;
      margin: 0 auto;
      padding: 2rem;
    }

    `
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
