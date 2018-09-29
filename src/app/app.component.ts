import { Component } from '@angular/core'; 
import { AppConfigs } from './appconfigs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' , './app-mobile.component.scss']
})
export class AppComponent {
  private appConfigs = new AppConfigs();
  ngOnInit() {
  }
}
