import { Component } from '@angular/core';
import {ExperienceService} from '../../services/experience.service' 

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html', 
  providers: [ExperienceService]
})
export class ExperienceItemComponent {
  
  items: any[] = [];

  constructor (private experinceSetvice: ExperienceService) {}

  ngOnInit() {
    this.items = this.experinceSetvice.getData();
  }

}
