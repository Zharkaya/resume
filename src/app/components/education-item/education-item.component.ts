import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  providers: [ExperienceService]
})
export class EducationItemComponent {
    items: any[] = [];

    constructor (private experinceSetvice: ExperienceService) {}

    ngOnInit() {
      this.items = this.experinceSetvice.getEducation();
    }
}
