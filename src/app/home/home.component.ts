import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  private showWelcomeMessage: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showWelcomeMessage = screen.width <= 767 ? false : true;
    }, 3000);
  }

}
