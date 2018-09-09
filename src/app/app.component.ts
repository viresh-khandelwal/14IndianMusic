import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';   
import { AppConfigs } from './appconfigs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private appConfigs = new AppConfigs();
  ngOnInit() {
    alert(this.appConfigs.baseImagesPath);
  }
}
